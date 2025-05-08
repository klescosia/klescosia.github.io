Back when I was starting out in my data career, the big trend was **Data Warehousing and Business Intelligence (BI).** Every company I worked with was racing to build dashboards and reports that could help them make better decisions.

Why? Because companies rely on data to answer questions like: _What’s selling well? Where are we losing money? Which marketing campaigns are working?_ Dashboards and reports promised to turn raw data into **actionable insights.**

And they weren’t wrong to do so. One of the most important assets of **any organization is its information.** Back in the 1990s, [a group of researchers ](https://ojs.aaai.org/aimagazine/index.php/aimagazine/article/view/1230) recognized a need for new theories and tools to help us extract useful knowledge from the expanding volumes of digital data—driven by the **Web 2.0 boom.** They coined the term _Knowledge Discovery in Databases (KDD),_ which would later become more widely known as **Data Mining.**

In simple terms, data mining is the practice of examining large datasets to uncover **new insights and patterns.**

One of the ways businesses began generating these insights was through **data warehouses**—specialized systems designed to store and organize massive amounts of historical data. These systems became the backbone of what’s known as _Online Analytical Processing (OLAP)._ 

At this point, it’s helpful to understand **why data warehouses are different from the systems that businesses use to run their daily operations.** After all, not all data systems are built for the same purpose.

# Operational Systems vs. DW/BI Systems

Organizations typically use data in two key ways:

1. **Operational record-keeping.**

2. **Analytical decision-making.**

|                                ![operational-vs-analytical](operational-vs-analytical.png)                                |
| :-----------------------------------------------------------------------------------------------------------------------: |
| *A Diagram of Operational System vs. Analytical System <br>(https://martinfowler.com/articles/data-mesh-principles.html)* |

Basically:

- **Operational systems** are where you _put data in._
- **Data warehouse and BI systems** are where you _get insights out._

**Operational systems** are where the **day-to-day work** happens—taking orders, signing up customers, logging activities. These systems are built for **speed** and **keep things up to date**, but they don’t usually store much history. These systems are also called an *Online Transaction Processing* (OLTP).

**DW/BI systems**, on the other hand, are all about looking back and identifying patterns. They answer questions like, _How many new orders came in this month? Why are complaints going up?_ To do that, they need to process **a lot of data** and keep track of history.

Simply put: operational systems are for **running the business,** while DW/BI systems are for **analyzing and improving it.**

OLAP tools were purpose-built to make it easier to **analyze data across multiple dimensions**. In 
simple terms, a **dimension** is just a way of looking at your data—for example, by time, by location, or by product category. They can look at sales _by month, by region,_ or _by product line,_ all in a few clicks. The goal was to simplify and support **interactive data analysis,** empowering decision-makers to explore their data and discover meaningful insights.

But here’s something I quickly learned: building dashboards isn’t just about collecting data and plugging it into a tool. For any of this to work—whether it’s slicing sales data or spotting trends—you need a **well-structured foundation.** 

That’s where **data modeling** comes in. The **data model** is like a playbook that organizes your basketball team. Without it, your players have no way to read the games, break down the plays, learn from past performance, or improve for the next match. 

Skipping the data model is like **trading Luka Dončić to the Lakers** — disastrous and catastrophic. You’re setting yourself up for chaos, confusion, and a whole lot of regret. (Yes, I’m talking about you, Nico.)

# Data Modeling

## Components of a Data Model

- **Entities (or tables)** - The “things” you track (like customers, orders, products).
- **Attributes (or columns)** - Details about those things (like customer name, order date, product price).
- **Relationships** - How things connect (like which customer placed which order).

## Data Model Types
- Conceptual Data Models
- Logical Data Models
- Physical Data Models
## Data Model Techniques
- Dimensional Modeling
	- Fact Tables
	- Dimensions
- Data Vault Modeling

--- 

*This blog is authored solely by me and reflects my personal opinions and experiences, not those of my employer. All references to products, including names, logos, and trademarks, belong to their respective owners and are used for identification purposes only.*
