---
title: File Storage Options
sidebar_position: 2
---

# File Storage: The Digital Home of Data 🏠

The ability to store data in files is the core element of any computing system. In the past, we stored our data on local hard disks or USB drives; however, today the "central storage location" for organizations is the cloud. Cloud storage provides cost-effective, secure, and reliable storage for large volumes of data.

As an architect, we ask three critical questions when choosing a file format:
1. **What is the type of data?** (Structured, semi-structured, or unstructured).
2. **Which applications and services will read, write, and process the data?**.
3. **Should the data files be readable by humans, or optimized for efficient storage and processing?**.

---

## 📝 1. The Language Everyone Speaks: Common Formats

These formats are special because they are "human-readable".

* **Delimited Text Files (CSV/TSV):** This is the common language of the data world. Fields are separated by commas (CSV) or tabs (TSV), and rows end with a new line. It is the best choice if you need wide support from many applications.
* **JSON (JavaScript Object Notation):** A ubiquitous format for modern systems. It uses a hierarchical document schema to define objects with multiple attributes. It is very flexible for both structured and semi-structured data.
* **XML (Extensible Markup Language):** A popular format from the 90s and 2000s. It defines elements and attributes using tags (`<../>`). It is more verbose than JSON but still used by some systems.
* **BLOB (Binary Large Object):** All files are actually stored as binary data (1's and 0's). We use the term BLOB for raw binary data like images, video, audio, and documents that do not have a specific structure.

---

## 🚀 2. The Architect's Secret Weapons: Optimized Formats

In the Big Data world, human readability is replaced by **performance and compression**. These formats use special indexing and storage techniques to reduce processing times significantly.



### 🛰️ Avro (Row-based)
Created by Apache, this is a **row-based** format.
* Each record contains a **JSON header** that describes the structure of the data.
* The data itself is stored as binary information, which minimizes storage and network bandwidth needs.

### 🏛️ ORC (Optimized Row Columnar)
Developed by HortonWorks to optimize read and write operations in Apache Hive.
* It organizes data into **columns** rather than rows.
* An ORC file contains **stripes** of data. Each stripe includes an index, the data for each row, and a footer with statistical information (count, sum, max, min).

### 💎 Parquet (Columnar)
Created by Cloudera and X, this is another powerful columnar data format.
* It stores data for each column together in **row groups**.
* The biggest strength is **Metadata**. An application can use this metadata to quickly find the correct chunk of data and read only the specified columns.
* It is very efficient at storing and processing nested data types.

---

> **Important Note:** You should choose **Avro** if you are writing data from a constant stream (streaming); however, you should choose **Parquet** for complex analysis and reporting on massive datasets.