# Project README templates

Two starter READMEs for the data engineering projects the portfolio is missing.
Copy one into a new GitHub repo, build the project, then replace every `TODO` with real numbers.

| Template | Proves | Rough effort |
|---|---|---|
| [`databricks-medallion-pipeline.md`](databricks-medallion-pipeline.md) | Databricks DE Professional skills in practice: Delta Lake, DLT, Unity Catalog, Workflows | 2–3 weekends |
| [`snowflake-elt-dbt.md`](snowflake-elt-dbt.md) | SnowPro Advanced skills in practice: Snowpipe, streams/tasks, dbt, data quality | 2 weekends |

## Rules that make these work in interviews

1. **Every number must be real.** Measure row counts, runtimes and costs from your own runs. One made-up figure discredits the whole repo.
2. **Lead with the diagram.** Reviewers spend about 30 seconds on a README. The architecture image is the first thing they should see.
3. **"Design decisions" is the section interviewers ask about.** Write down *why* you chose one option over another, not just *what* you built.
4. **Keep it runnable.** A `make setup` / `make run` (or a clear 3-step quickstart) shows engineering maturity.
5. **When it's done,** add the repo URL to `code:` in `lib/content.js → PROJECTS`. The "Links coming soon" label disappears automatically.
