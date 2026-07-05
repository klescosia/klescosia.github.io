
My first encounter of Databricks was back on early 2019. Back then, we were an AWS Partner and heavily built our solutions on AWS as well as a data platform called Qubole. That was also my first touch with Apache Spark. Lakehouse term wasn't widely used back then, even AWS didn't use them that much. Instead, they relied on Data Lake + Data Warehouse with S3, Glue, and Redshift (Spectrum) at its core. 

The platforms did well, but then I encountered a problem when I tried executing ACID transactions on Spark SQL. Or to put it simply, updating records in data lakes is hard. Instead, you'd have to build complicated pipelines to read entire partitions or tables, modify the data and write them back. It became hard to maintain. Our Glue Jobs literally was comprised of multiple SQL statements to do upserts and deduplication of data. 

So, I started to research about how to enable or how to run ACID transactions on a Data Lake like S3 using various platforms such as AWS Glue and Qubole. That's when I knew about open-source frameworks like Iceberg, Hudi, and Delta Lake as well as the company behind it, Databricks. It was an interesting read and I wanted to try it out, but apparently it's not available on the current platform's Spark version. Though, it did became available eventually and I even wrote an article about it! 

# Apache Spark

Before Spark, there was the Hadoop ecosystem which comprised of Hadoop Distributed File System (HDFS), MapReduce, and Yet Another Resource Negotiator (YARN). It was revolutionary at the time when Google first published it back in 2004. It became the default go-to tools of major companies that wanted to do something about their "big data" in the advent of the world wide web (WWW).

MapReduce was great for huge datasets where you only needed to read and write data once. It split heavy work across hundreds of machines smoothly and safely. However, while MapReduce was perfect for that single task, it was terrible for any other kind of data workload.

Apache Spark solved major flaws in MapReduce. Matei's implementation of RDDs changed the game by introducing **in-memory data processing**, which made big data workflows up to **100 times faster** than traditional systems like MapReduce. Spark keeps data in the computer’s RAM across the entire cluster. It only writes to the hard drive at the very end of the job. This single shift made iterative tasks like machine learning, exponentially faster.

# Founding of a billion-dollar Data and AI company

It all started with an idea of helping people do cool things with data and AI, the goal was to have impact on enabling business use cases however or whatever needs to be done with Matei Zaharia's work (Apache Spark) at its core. 

Back in 2013, Matei, along with 6 researchers, founded Databricks:

- Ali Ghodsi - back then was the VP of Engineering and Product
- Ion Stoica - A senior professor at UC Berkeley. The first CEO
- Patrick Wendell - Co-founder, Spark's open-source release manager
- Reynold Xin - Co-founder, who had built Shark - a SQL layer on top of Spark that would eventually become Spark SQL (thanks, Reynold, for Spark SQL)
- Scott Shenker - Co-founder, the Berkeley legend who had helped advise the whole project into existence
- Andy Konwinski - Co-founder, who had studied cluster scheduling and MapReduce inefficiencies

Spark was hard to setup and manage. You'd need expertise on systems engineering, distributed computing, and infrastructure management. Early Spark usually ran on top of Apache Hadoop YARN or HDFS. Engineers had to manage complex Hadoop clusters just to use Spark. Not to mention OOM (Out of Memory) Errors. Poorly configured executors frequently crashed clusters with cryptic JVM memory errors. 

Databricks commercialized this open-source project. This became their business model. Building a managed platform to run Spark. This made it easier to deploy and operate these clusters in the cloud by abstracting away the complexities of running this system. I mean, who would you have as a partner to run your Spark workloads other than the creator themselves, right? They called it, Databricks Cloud.

# Growing Beyond Spark: From Engine to Platform

By 2017, Databricks evolved from an Apache Spark-focused company into a unified data platform, combining Data Science, Data Engineering, and Business. Industry’s first unified data management system delivers the scale of a data lake, the reliability and query performance of a data warehouse, and the low-latency of streaming. With the launch of Databricks Delta, they've eliminated the complexity and operational overhead of maintaining three disparate systems: data lakes, data warehouses and streaming systems. This was also the time where Data Lakes hit their limitations. 

Partnership with Microsoft enabled Databricks to become a first-party integration with Azure, which boosted their accessibility. It played an important role in Databricks' growth.

# The Lakehouse 

What really enabled and bridged the gap between data lakes and data warehouses was: Delta Lake. The question was, how do you build a data warehouse at a fraction of the cost of actually owning one? The answer was to use a cloud object storage, which are already known to be cheap, scalable, and durable, to store data and run a warehouse on top of it. 

Delta Lake made a Data Lake reliable by enabling ACID transactions to run on top of it. Lakehouse was the best of both worlds: Data Warehouse and Data Lake. Databricks researchers formalized the idea in a 2021 paper, and by 2022 they'd fully open sourced Delta Lake itself, turning what started as a fix for my upsert problem into an open standard anyone could build on.

# The Data Intelligence Platform

Fast forward today, as of this writing, Databricks is valued at \$134 Billion. By 2025, generative AI had changed what customers wanted from Databricks: not just a place to store and query data, but the platform AI agents run on top of. It's the same instinct that built the company in the first place, take whatever data workload is currently painful and make it disappear into a single platform, just pointed at a new problem. 

What started as a way to run Spark without babysitting a cluster became a way to trust your data, and now it's becoming a place agents read and write against without anyone stitching pipelines together by hand. The acquisitions and product launches keep piling up, but the through line hasn't changed since 2013: whatever the next hard problem in data and AI turns out to be, Databricks wants to already be building the answer to it. My upsert problem from 2019 turned out to be a pretty small piece of a much bigger story and I'm glad that I'm part of this revolution.

---

# A Timeline: Databricks Product Releases

### 2013 to 2019

- Founded in 2013 by the creators of Apache Spark at UC Berkeley
- Apache Spark and MLlib development
- Azure Databricks launched in 2017 through a Microsoft partnership

### 2020 to 2021

- Lakehouse architecture concept formalized (the Lakehouse paper published January 2021)
- Delta Lake open source project growing

### 2022

- Delta Lake fully open sourced

### 2023

- Dolly, an open source language model, released in March
- Okera (data security and governance) acquired in May
- MosaicML acquired for \$1.4 billion in June, bringing LLM training infrastructure
- Arcion (data replication) acquired for \$100 million in October
- Databricks SQL crossed \$100 million ARR in April, a year after launch

### 2024

- Tabular (data management) acquired for over \$1 billion
- Databricks SQL grew to \$400 million ARR
- Series J funding of \$10 billion in December, led by Thrive Capital

### 2025

- Partnership with Anthropic announced in March to help companies build AI agents
- \$1 billion investment in San Francisco announced in March
- Neon (serverless database) acquired for around \$1 billion
- Partnership with Google Cloud announced in June
- New SQL editor became generally available in October
- Mooncake Labs acquired in October, tightening the Lakebase to lakehouse integration
- Series K of \$1 billion closed in September at a valuation above \$100 billion
- AI products reached a \$1.4 billion revenue run rate by Q4

### 2026

- Lakehouse Transactional Access Protocol (LTAP) launched in June, adding native transactional writes to Delta and Iceberg tables
- Lakehouse//RT for millisecond latency queries on the lakehouse
- Delta Sharing rebranded and expanded into the open OpenSharing standard
- Panther (cloud security analytics) acquired in June
- Anthropic Claude Sonnet 5 and Claude Fable 5 added as Databricks hosted models in June
- Data Warehousing crossed \$1.5 billion ARR run rate by June, up from \$1.0 billion in Q3 2025
- Genie moving to pay as you go pricing starting July 6

---

*Sources and References:*

- *Seven Academics Who Had Never Run a Company: The Origin Story of Databricks - https://www.stacksync.com/blog/seven-academics-who-had-never-run-a-company-the-origin-story-of-databricks*
- *Open Sourcing Delta Lake - https://www.databricks.com/blog/2019/04/24/open-sourcing-delta-lake.html*
- *Databricks Cloud - https://www.databricks.com/blog/2014/06/30/databricks-unveils-spark-based-cloud-platform.html*
- *Databricks: A Unified Data Platform - https://www.databricks.com/company/newsroom/press-releases/databricks-launches-delta-combine-best-data-lakes-data-warehouses-streaming-systems*

---
*This blog is authored solely by me and reflects my personal opinions and experiences, not those of my employer. All references to products, including names, logos, and trademarks, belong to their respective owners and are used for identification purposes only. I may or may not have used AI tools to help draft, edit, or research parts of this post. I won't spell out where or how. Take the content on its merits and decide for yourself what that means to you.*