---
title: Veri Biçimlerini Tanımlama
sidebar_position: 1
---

# Veri Biçimlerini Tanımlama 🧬

Dijital dünyada veri; sayılardan, gözlemlerden ve olguların koleksiyonundan oluşan devasa bir gerçeklik kütlesidir. Ancak ham veri, işlenmediği sürece sadece bir gürültüdür. Bir mimar olarak bizim görevimiz, bu gürültüyü organizasyon için değerli olan **entity**'lere (varlıklar - örneğin bir müşteri veya ürün) ve onları tanımlayan **attribute**'lara (özellikler - isim, adres, fiyat) dönüştürmektir.

Veriyi doğru yönetmenin ilk kuralı, onun "şeklini" yani yapısını anlamaktır. Gelin veriyi üç ana karakter altında inceleyelim:

### 1. Structured Data (Yapılandırılmış Veri): "Düzenli Kütüphane" 📚
Yapılandırılmış veri, belirli bir **fixed schema** (sabit şema) içine hapsolmuş veridir. Yani her bir veri parçasının nerede duracağı ve hangi özelliğe sahip olacağı önceden bellidir.

* **Tablo Yapısı:** Veri, satırlar (her bir kayıt) ve sütunlardan (özellikler) oluşan bir tabloda yaşar.
* **İlişkisel Model:** Genellikle bir veritabanında saklanır ve tablolar birbirini "key" (anahtar) değerler üzerinden selamlar.
* **Örnek:** Bir Excel sayfası veya SQL tablosu düşünün. Müşteri listesinde "İsim" sütunu her zaman aynı yerdedir ve boş geçilemez.

### 2. Semi-Structured Data (Yarı Yapılandırılmış Veri): "Esnek Formlar" 📄
Hayat her zaman tablolara sığmaz. Yarı yapılandırılmış veri, bir yapıya sahiptir ancak her kayıt için esneklik tanır.

* **Varyasyon Şansı:** Bir müşterinin iki e-posta adresi varken, diğerinin hiç olmayabilir. Bu veri tipi, bu farklılıklara kızmaz, onları kucaklar.
* **JSON Dünyası:** Bu kategorinin en popüler temsilcisi **JSON** formatıdır. Hiyerarşiktir ve esnektir.
* **Örnek:** Akıllı telefonunuzdaki rehber. Bazı kişilerde sadece isim varken, bazılarında iş adresi, web sitesi ve doğum günü gibi onlarca ekstra alan bulunur.




### 3. Unstructured Data (Yapılandırılmamış Veri): "Hafıza Kutusu" 📦
Dünyadaki verinin büyük çoğunluğu ne bir tabloya ne de bir JSON'a sığar. Hiçbir belirli şeması veya düzeni olmayan bu yığına yapılandırılmamış veri diyoruz.

* **Dijital Varlıklar:** Dokümanlar, fotoğraflar, ses kayıtları ve videolar bu gruptadır.
* **BLOB Kavramı:** Veri profesyonelleri bu tür dosyalara genellikle **BLOB** (Binary Large Objects) derler.
* **Örnek:** Bir sosyal medya platformundaki video paylaşımları veya sistemlerin ürettiği devasa boyutlardaki binary dosyalar.


Organizasyonlar veriyi bu üç formatta saklayarak, daha sonra analiz ve raporlama yapmak üzere hazır tutarlar. Veri depolama dünyasında karşımıza iki dev çıkar:
1. **File Stores (Dosya Depoları):** Verinin dosya bazlı (CSV, JSON, Parquet) saklandığı yerler.
2. **Databases (Veritabanları):** Veri kayıtlarını yönetmek için özelleşmiş sistemler.