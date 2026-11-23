# ❄️ TODO-Project-Name — Snowflake ELT with Snowpipe & dbt

> Event-driven ELT pipeline that auto-ingests **TODO dataset** (e.g. e-commerce orders, IPL ball-by-ball, Indian railways) into Snowflake with Snowpipe, transforms it with dbt into a tested star schema, and powers a TODO (Power BI / Streamlit) dashboard.

![Architecture](docs/architecture.png)
<!-- Source files → S3 / internal stage → Snowpipe → RAW → dbt (staging → intermediate → marts) → BI tool -->

**Stack:** Snowflake · Snowpipe · Streams & Tasks · dbt Core · AWS S3 · Python · Power BI / Streamlit · GitHub Actions

---

## The problem

TODO: 2–3 sentences on the business question and why the raw data needs modelling.

## Results

| Metric | Value |
|---|---|
| Rows ingested | TODO |
| File-landed → queryable latency | TODO seconds (Snowpipe) |
| dbt models / tests | TODO / TODO (all passing) |
| Full refresh vs incremental runtime | TODO s vs TODO s |
| Warehouse credits per daily run | TODO |

## Data model

```
RAW (VARIANT JSON / CSV)  →  STAGING (typed, renamed, 1:1)  →  INTERMEDIATE (joins, business logic)  →  MARTS
                                                                                        ├── fct_orders
                                                                                        ├── dim_customer (SCD2 via dbt snapshot)
                                                                                        └── dim_product
```

![dbt lineage](docs/dbt-lineage.png)
<!-- Screenshot from `dbt docs serve`. -->

## Data quality

| Test | Applied to |
|---|---|
| `unique`, `not_null` | All primary keys |
| `relationships` | Fact → dimension foreign keys |
| `accepted_values` | Order status, payment type |
| Custom: `amount >= 0` | `fct_orders.amount` |
| Source freshness | Raw tables (warn > 1h, error > 24h) |

## Design decisions

- **Snowpipe vs scheduled `COPY INTO`:** TODO (latency vs cost trade-off you measured).
- **Incremental models:** TODO (`is_incremental()` strategy, `unique_key`, merge vs append).
- **Semi-structured data:** TODO (flattening `VARIANT` with `LATERAL FLATTEN`, where you kept JSON vs typed columns).
- **Warehouse sizing:** TODO (X-Small for loads, Small for dbt runs; auto-suspend 60s; measured credits).
- **Clustering:** TODO (clustering key on `order_date` once the table passed TODO GB, and the pruning % you observed).
- **Security:** TODO (role hierarchy: `LOADER`, `TRANSFORMER`, `REPORTER`; least privilege).

## What I'd do at production scale

- Orchestrate with Airflow / Dagster (or Snowflake Tasks DAG) with retry + alerting
- dbt CI: `dbt build --select state:modified+` on every PR with Slim CI
- Dynamic tables for low-latency marts
- Masking policies on PII columns; object tagging for governance
- Resource monitors to cap credit spend

## Repository layout

```
├── ingestion/
│   ├── setup.sql          # stages, file formats, pipes, roles
│   └── generate_data.py   # optional synthetic data generator
├── dbt/
│   ├── models/{staging,intermediate,marts}/
│   ├── snapshots/
│   └── tests/
├── .github/workflows/dbt-ci.yml
└── docs/
```

## Run it yourself

1. Snowflake 30-day trial → run `ingestion/setup.sql` as `ACCOUNTADMIN`.
2. `pip install dbt-snowflake && cd dbt && dbt deps && dbt build`.
3. Drop files into the stage and watch Snowpipe load them (`SELECT SYSTEM$PIPE_STATUS('...')`).

## What I learned

TODO: 3–4 honest bullets.

---
*Built by [Srushti Mohire](https://srushtimohire.com) · SnowPro Advanced: Data Engineer*
