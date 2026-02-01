---
title: Identifying Data Formats
sidebar_position: 1
---

# Identifying Data Formats 🧬

In the digital world, data is a large collection of facts like numbers, descriptions, and observations used to record information. However, raw data is just noise until we process it. As an architect, our job is to turn this noise into **entities** (like a customer or a product) and **attributes** (like a name, address, or price) that are valuable for the organization.

The first rule of managing data correctly is to understand its "shape"—its structure. Let’s look at data in three main categories:


### 1. Structured Data: "The Organized Library" 📚
Structured data follows a **fixed schema**. This means every piece of data has a known place and specific properties.

* **Tabular Structure:** The data lives in tables with rows (to represent each record) and columns (to represent attributes).
* **Relational Model:** Data is usually stored in a database where tables connect to each other using "key" values.
* **Example:** Think of an Excel sheet or a SQL table. In a customer list, the "Name" column is always in the same place and cannot be empty.

<img width="820" height="273" alt="image" src="https://github.com/user-attachments/assets/6d8257fe-7d13-48b7-9689-83bb7f572a26" />

---

### 2. Semi-Structured Data: "Flexible Forms" 📄
Life does not always fit into perfect tables. Semi-structured data has some structure, but it allows for changes between different records.

* **Variation:** One customer might have two email addresses, while another has none. This data type is flexible and accepts these differences.
* **JSON World:** The most popular format for this category is **JSON** (JavaScript Object Notation). It is hierarchical and very flexible.
* **Example:** The contact list on your smartphone. Some contacts only have a name, while others include work addresses, websites, and birthdays.

<img width="580" height="328" alt="image" src="https://github.com/user-attachments/assets/fbec27b3-21cf-4244-99a3-7e6eafec00a5" />

---

### 3. Unstructured Data: "The Memory Box" 📦
Most data in the world does not fit into a table or a JSON file. We call data with no specific schema or organized order "unstructured data".

* **Digital Assets:** Documents, photos, audio, and video files are in this group.
* **BLOB Concept:** Data professionals usually call these files **BLOBs** (Binary Large Objects).
* **Example:** Video posts on social media or very large binary files created by systems.

<img width="690" height="522" alt="image" src="https://github.com/user-attachments/assets/5c362e64-3a2e-4cb7-9251-2e94874797fe" />


---

### Summary: Data Stores
Organizations store data in these three formats to analyze them later. In the world of data storage, there are two main types:
1.  **File Stores:** Locations where data is stored as files (like CSV, JSON, or Parquet).
2.  **Databases:** Specialized systems used to manage and query data records.
