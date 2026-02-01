---
title: Dosya Depolama Seçenekleri
sidebar_position: 2
---

# Dosya Depolama: Verinin Dijital Evi 🏠

Veriyi bir dosyada saklayabilmek, her bilişim sisteminin temel taşıdır. Eskiden verilerimizi yerel disklerde veya USB sürücülerde saklardık; ancak günümüzde organizasyonlar için "merkezi veri deposu" artık buluttur. Bulut depolama, devasa hacimlerdeki veriler için maliyet etkin, güvenli ve güvenilir bir liman sunar.

Bir mimar olarak dosya formatı seçerken şu üç kritik soruya yanıt ararız:
1. **Verinin türü nedir?** (Structured, Semi-structured, Unstructured).
2. **Hangi servisler bu veriyi okuyacak veya işleyecek?**.
3. **Veri insanlar tarafından mı okunmalı, yoksa makineler için mi optimize edilmeli?**.

---

## 📝 1. Herkesin Konuştuğu Dil: Yaygın Formatlar

Bu formatlar "insan tarafından okunabilir" (human-readable) olmalarıyla öne çıkarlar.

* **Delimited Text Files (CSV/TSV):** Veri dünyasının ortak dilidir. Alanlar virgül (CSV) veya tab (TSV) ile ayrılır; satırlar ise yeni bir satır karakteriyle sonlanır. Geniş bir uygulama desteği arıyorsanız en güvenli limandır.
* **JSON (JavaScript Object Notation):** Modern sistemlerin vazgeçilmezidir. Hiyerarşik bir doküman şeması kullanır ve verileri `isim:değer` çiftleri olarak saklar. Hem yapılandırılmış hem de yarı yapılandırılmış veriler için oldukça esnektir.
* **XML (Extensible Markup Language):** 90'lı ve 2000'li yılların popüler formatıdır. Etiketler (`<tag>`) kullanarak veriyi tanımlar. JSON'a göre daha kalabalıktır ancak hala birçok eski sistemde karşımıza çıkar.
* **BLOB (Binary Large Object):** Aslında tüm dosyalar 1 ve 0'lardan (binary) oluşur. Ancak görüntüler, videolar ve ses dosyaları gibi özel bir şemaya uymayan ham verilere profesyonel dünyada BLOB deriz.

---

## 🚀 2. Mimarın Gizli Silahları: Optimize Edilmiş Formatlar

Büyük veri (Big Data) dünyasında insan okunabilirliği, yerini **performans ve sıkıştırmaya** bırakır. Bu formatlar özel dizinleme ve sıkıştırma teknikleri kullanarak işleme sürelerini dramatik şekilde düşürür.



### 🛰️ Avro (Row-based)
Apache tarafından geliştirilen bu format, veriyi **satır tabanlı** saklar.
* Her kayıt, verinin yapısını açıklayan bir **JSON header** (başlık) içerir.
* Verinin kendisi binary olarak saklandığı için ağ bant genişliğini ve depolama alanını minimize eder.

### 🏛️ ORC (Optimized Row Columnar)
HortonWorks tarafından Hive üzerinde okuma/yazma işlemlerini optimize etmek için geliştirilmiştir.
* Veriyi satırlar yerine **sütunlar** halinde organize eder.
* Dosya içinde **stripe** (şerit) adı verilen yapılar bulunur; her stripe kendi içinde indekslere ve istatistiklere (count, sum, max, min) sahip bir footer içerir.

### 💎 Parquet (Columnar)
Cloudera ve X tarafından oluşturulan, analitik sorguların kralıdır.
* Verileri **row groups** (satır grupları) içinde sütun bazlı saklar.
* En büyük gücü **Metadata** kullanımıdır; uygulama, metadata sayesinde ihtiyacı olan veri parçasını (chunk) anında bulur ve sadece ilgili sütunları okur.
* Özellikle iç içe geçmiş (nested) veri tiplerini işlemede rakipsizdir.

---

> **Önemli Not:** Eğer veriyi sürekli akan bir hattan (streaming) yazıyorsanız **Avro**; ancak devasa veriler üzerinde karmaşık analizler ve raporlar koşturuyorsanız **Parquet** tercih etmelisiniz.