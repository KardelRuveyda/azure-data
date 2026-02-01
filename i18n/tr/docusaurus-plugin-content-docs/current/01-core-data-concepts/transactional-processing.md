---
title: İşlemsel Veri İşleme (OLTP)
sidebar_position: 3
---

# Online Transactional Processing (OLTP): İşin Kalbi ⚡

Bir banka ATM'sinden para çektiğinizi veya marketten sevdiğiniz bir atıştırmalığı aldığınızı düşünün. O anda arka planda gerçekleşen şey bir **Transaction** (işlem), yani küçük ve bağımsız bir iş birimidir. 

İşlemsel veri işleme sistemleri (OLTP), bu anlık olayları kaydetmek ve yönetmek için tasarlanmıştır. Bu sistemlerin en büyük meydan okuması **hız** ve **doğruluktur**. Günde milyonlarca işlemin yapıldığı bir dünyada, veriye anlık erişim sağlamak ve bu veriyi güvenle saklamak bir mimarın birincil görevidir.

---

## 🛡️ Veri Mimarisinin Kutsal Kuralları: ACID Prensipleri

OLTP sistemlerinin "şakası yoktur". Bir işlemin yarım kalması veya yanlış kaydedilmesi, finansal kayıplara veya güven kaybına yol açar. Bu yüzden, işlemsel sistemler **ACID** adı verilen dört temel prensibe sıkı sıkıya bağlıdır:



### 1. Atomicity (Bütünlük / Atomiklik) - "Ya Hep Ya Hiç"
İşlem bir bütündür; ya tamamen başarılı olur ya da tamamen başarısız sayılır. 
* **Örnek:** A hesabından B hesabına para gönderirken; para A'dan düşüp B'ye eklenemezse, tüm işlem iptal edilir (Fail). Para havada kalmaz.

### 2. Consistency (Tutarlılık) - "Kurallara Uygun Geçiş"
İşlemler veriyi her zaman bir geçerli durumdan diğerine taşır. Veritabanındaki tüm kurallar (kısıtlamalar, triggerlar) işlem bittiğinde hala geçerli olmalıdır.
* **Örnek:** İşlem bittiğinde, her iki hesabın bakiyesi de yapılan transferi doğru şekilde yansıtmalıdır.

### 3. Isolation (İzolasyon) - "Sıranı Bekle"
Aynı anda yapılan işlemler birbirini etkilemez. Sanki sistemde o an sadece tek bir işlem yapılıyormuş gibi davranılır.
* **Örnek:** Siz para transferi yaparken bir başkası bakiyenizi kontrol ediyorsa, transferin "yarım kalmış" halini (para A'dan düştü ama B'ye henüz geçmedi halini) asla göremez.

### 4. Durability (Dayanıklılık) - "Kaydettiysen Unutma"
İşlem tamamlandığında (committed), sistem kapansa veya elektrikler kesilse bile veri kalıcı olarak saklanır.
* **Örnek:** Banka transfer onayını ekranda gördüğünüz an, o veri artık sistemin fiziksel hafızasındadır; veritabanı kapansa bile açıldığında o transferi hatırlar.

---

## 🏗️ Mimari Bakış: LOB Uygulamaları

OLTP çözümleri genellikle **Line of Business (LOB)** uygulamalarını desteklemek için kullanılır. Bu sistemler optimize edilirken tek bir şeye odaklanılır: **Yüksek Erişilebilirlik ve Hızlı Yanıt Süresi**.



OLTP tasarlarken şu **CRUD** operasyonlarına odaklanırız:
* **C**reate (Oluşturma)
* **R**ead (Okuma)
* **U**pdate (Güncelleme)
* **D**elete (Silme)

> **💡 Önemli Not:** Sınavlarda veya gerçek hayat senaryolarında karşınıza çıkacak en büyük tuzak, OLTP'yi "büyük veri depolama kapasitesi" ile karıştırmaktır. OLTP devasa veri saklamaktan ziyade, **anlık işlemleri en hızlı ve en tutarlı** şekilde yapmak için optimize edilir.