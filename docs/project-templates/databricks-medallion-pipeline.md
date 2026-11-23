# 🚕 TODO-Project-Name — Medallion Lakehouse Pipeline on Databricks

> End-to-end batch + incremental pipeline that ingests **TODO dataset** (e.g. NYC TLC trip records), refines it through Bronze → Silver → Gold with Delta Live Tables, and serves analytics-ready tables to a Databricks SQL dashboard.

![Architecture](docs/architecture.png)
<!-- Draw it in Excalidraw / draw.io: Source → Auto Loader → Bronze → Silver → Gold → SQL Warehouse → Dashboard. Export as PNG. -->

**Stack:** Databricks · Delta Lake · Delta Live Tables · Auto Loader · Unity Catalog · Databricks Workflows · PySpark · Databricks SQL

---

## The problem

TODO: 2–3 sentences. What question does the business want answered, and why is the raw data not usable as-is?
*Example: "Trip data arrives as monthly Parquet files with schema changes between years, duplicate records and invalid fares. Analysts need a trusted daily view of revenue and demand by zone."*

## Results

| Metric | Value |
|---|---|
| Raw records processed | TODO (e.g. 38M rows / 12 months) |
| End-to-end runtime | TODO min on TODO cluster size |
| Records rejected by quality rules | TODO (TODO %) |
| Incremental run (new month only) | TODO min |
| Gold tables / dashboard tiles | TODO / TODO |

## Architecture

| Layer | What happens | Key techniques |
|---|---|---|
| **Bronze** | Raw files landed as-is with ingestion metadata | Auto Loader (`cloudFiles`), schema inference + `rescuedDataColumn`, `_ingested_at`, `_source_file` |
| **Silver** | Cleaned, typed, de-duplicated, conformed | DLT expectations (`expect_or_drop`), dedup on business key, type casting, zone lookup join |
| **Gold** | Business aggregates for analytics | Daily revenue by zone, hourly demand, trip-duration distribution, SCD Type 2 on the TODO dimension |

### Data quality rules
| Rule | Action | Why |
|---|---|---|
| `fare_amount > 0` | drop | Negative/zero fares are refunds or errors |
| `pickup_ts < dropoff_ts` | drop | Impossible trips |
| `passenger_count BETWEEN 1 AND 8` | warn | Keep but monitor |
| TODO | TODO | TODO |

## Design decisions

- **Why DLT instead of plain notebooks + jobs?** TODO (declarative dependencies, built-in expectations, lineage, automatic retries).
- **Why Auto Loader over `COPY INTO`?** TODO (scales to many files, schema evolution, exactly-once with checkpoints).
- **Partitioning / clustering:** TODO (e.g. liquid clustering on `pickup_date, pickup_zone` because most Gold queries filter on date + zone).
- **Handling schema drift:** TODO (what changed between years and how the pipeline absorbed it).
- **Cost:** TODO (job cluster vs all-purpose, Photon on/off, measured DBU cost per run).

## What I'd do at production scale

- Streaming ingestion with Structured Streaming / DLT continuous mode for near-real-time Gold tables
- CI/CD with **Databricks Asset Bundles** + GitHub Actions (deploy dev → staging → prod)
- Unity Catalog row/column-level security and data lineage for governance
- Alerting on expectation failure rates via Databricks SQL alerts → Slack/email
- `OPTIMIZE` / `VACUUM` scheduling and table maintenance policies

## Repository layout

```
├── pipelines/
│   ├── bronze.py          # Auto Loader ingestion
│   ├── silver.py          # cleansing + expectations
│   └── gold.py            # business aggregates
├── workflows/job.yml      # Databricks Workflow / Asset Bundle definition
├── tests/                 # pytest + chispa unit tests for transformations
├── dashboards/            # exported Databricks SQL dashboard
└── docs/architecture.png
```

## Run it yourself

1. Create a free **Databricks Community / trial** workspace and a Unity Catalog volume.
2. `databricks bundle deploy -t dev` (or import `pipelines/` and create a DLT pipeline pointing at them).
3. Upload TODO sample files to the landing volume and start the pipeline.

## What I learned

TODO: 3–4 honest bullets. Interviewers love this section. Example: *"Deduplicating before the zone join cut Silver runtime by 40%. Join order matters more than cluster size."*

---
*Built by [Srushti Mohire](https://srushtimohire.com) · Databricks Certified Data Engineer Professional*
