---
title: Analitik Veri İşleme (OLAP)
sidebar_position: 4
---

# Online Analytical Processing (OLAP): Büyük Resmin Peşinde 📊

İşlemsel sistemlerde (OLTP) her bir kalp atışını (siparişler, ödemeler) kaydettik. Peki, "Geçen yılın aynı dönemine göre satışlarımız neden düştü?" veya "En kârlı müşteri segmentimiz hangisi?" gibi soruların cevabını nerede bulacağız? 

İşte burada devreye **OLAP** giriyor. Analitik sistemler, genellikle salt-okunur (read-only) yapılardır ve devasa hacimlerdeki geçmiş verileri veya iş metriklerini analiz etmek için optimize edilmişlerdir. Bir mimar için OLAP, veriyi sadece saklamak değil, onu bir "karar destek mekanizmasına" dönüştürmektir.

---

## 🏛️ Analitik Mimari: Verinin Yolculuğu

Kurumsal ölçekte bir analitik sistem, verinin ham halden rafine edilmiş bir rapor haline gelmesine kadar dört ana katmandan oluşur:



### 1. Data Lake (Veri Gölü): "Ham Veri Ambarı" 🌊
Operasyonel sistemlerden gelen verilerin (ETL süreçleriyle) hiçbir yapısal kısıtlama olmaksızın toplandığı, dosya tabanlı devasa depolama alanlarıdır. 
* **Kimler kullanır?** Genellikle **Data Scientist**'ler, ham dosyaları keşfetmek ve modeller oluşturmak için doğrudan veri gölünde çalışırlar.

### 2. Data Warehouse (Veri Ambarı): "Düzenli Showroom" 🏛️
Analiz ve raporlama için optimize edilmiş, ilişkisel bir şemaya sahip yapılardır. Veri buraya gelmeden önce temizlenir ve yapılandırılır.
* **Kimler kullanır?** **Data Analyst**'ler, karmaşık raporlar ve görselleştirmeler üretmek için doğrudan buradaki tabloları sorgularlar.

### 3. Data Lakehouse: "Modern Hibrit" 🏠
Veri gölünün (Lake) esnek ve ölçeklenebilir depolama gücüyle, veri ambarının (Warehouse) ilişkisel sorgulama yeteneklerini birleştiren modern bir inovasyondur.

### 4. OLAP Model (Küp): "Çok Boyutlu Bakış" 🧊
Verilerin **Dimensions** (Boyutlar - tarih, şehir, ürün) üzerinden **Measures** (Ölçümler - satış tutarı, miktar) ile önceden hesaplandığı yapılardır.
* **Drill up/down:** Bu model sayesinde "ülke" bazlı satışlardan tek bir "mağaza" bazlı satışa kadar detaya inebilir veya tam tersi yönde genel toplamlara çıkabilirsiniz.



---

## 👥 Ekosistemde Kim, Nerede Çalışır?

Her kullanıcının veriyle olan etkileşimi farklıdır ve bu mimari herkese ihtiyacı olan alanı sağlar:

* **Data Scientist:** Ham dosyalara ve veri gölüne (Data Lake) odaklanır.
* **Data Analyst:** Yapılandırılmış tablolara ve veri ambarına (Data Warehouse) odaklanır.
* **Business User (Yönetici/Karar Verici):** Önceden hazırlanmış raporlara, dashboardlara ve analitik modellere (Küp) odaklanır.

---

> **💡 Önemli Not:** Analitik işleme sistemleri, "Neler oldu?" sorusuna yanıt vermek için geçmişin fotoğrafını çeker. Veri burada denormalize edilerek (tekrar eden veriler eklenerek) sorguların çok daha hızlı çalışması sağlanır.