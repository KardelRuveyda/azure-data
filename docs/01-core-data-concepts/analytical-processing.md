---
title: Analytical Data Processing (OLAP)
sidebar_position: 4
---

# Online Analytical Processing (OLAP): Chasing the Big Picture 📊

In transactional systems (OLTP), we recorded every heartbeat—like orders and payments. But where do we find the answers to questions like, "Why did our sales drop compared to the same time last year?" or "Which customer segment is the most profitable?"

This is where **OLAP** comes in. Analytical systems are usually read-only (or read-mostly) systems optimized for analyzing huge amounts of historical data or business metrics. For an architect, OLAP is not just about storing data; it is about turning that data into a "decision support mechanism."

---

## 🏛️ Analytical Architecture: The Journey of Data

At an enterprise scale, an analytical system has four main layers to turn raw data into a refined report:

### 1. Data Lake: "The Raw Data Store" 🌊
This is a large, file-based storage area where data from operational systems is collected without structural limits (using ETL processes).
* **Who uses it?** Usually **Data Scientists**. They work directly in the data lake to explore raw files and build models.

### 2. Data Warehouse: "The Organized Showroom" 🏛️
These are relational structures optimized for analysis and reporting. Data is cleaned and organized before it enters the warehouse.
* **Who uses it?** **Data Analysts**. They query tables here to create complex reports and visualizations.

### 3. Data Lakehouse: "The Modern Hybrid" 🏠
This is a modern innovation that combines the flexible and scalable storage of a Data Lake with the relational query power of a Data Warehouse.

### 4. OLAP Model (Cube): "The Multi-dimensional View" 🧊
In this model, numeric values (**Measures** - like sales amount or quantity) are pre-calculated for different categories (**Dimensions** - like date, city, or product).
* **Drill up/down:** This model allows you to see the big picture (like total sales by country) or go deep into the details (like sales for a single store).

---

## 👥 Who Works Where in the Ecosystem?

Different users interact with data in different ways, and this architecture provides a space for everyone:

* **Data Scientist:** Focuses on raw files and the **Data Lake**.
* **Data Analyst:** Focuses on structured tables and the **Data Warehouse**.
* **Business User (Manager/Decision Maker):** Focuses on pre-prepared reports, dashboards, and **OLAP Models (Cubes)**.

---

> **💡 Important Note:** Analytical systems take a "photo of the past" to answer the question, "What happened?" In these systems, data is often **denormalized** (adding some duplicate data) to make queries run much faster.