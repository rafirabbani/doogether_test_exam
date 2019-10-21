# Readme for back end
 File Migrasi terdapat pada folder "db/migrations"
<br>File Seed terdapat pada folder "db/seeds"

File migrasi akan menjalankan perintah migrate phinx dengan environment development, database pada localhost, nama database test2_phinx, dan tabel "place". 

File migrasi akan membuat 7 kolom yg terdiri dari:

1. "place_name" = Nama dari tempat 
2. "place_address" = Alamat dari tempat
3. "place_region" = Kota dari tempat
4. "place_price"= Harga Sewa / Kelas
5. "place_open" = Waktu Buka
6. "place_close" = Waktu Tutup
7. "place_type"= "Tipe kegiatan

File seed akan menjalankan perintah seed phinx dengan environment development, database pada localhost, nama database test2_phinx, dan tabel "place"

File seed akan mengisi kolom yang telah dibuat sebelumnya ole file migrasi dengan ketentuan

1. "place_name" di isi dari array name yang telah dibuat
2. "place_address di isi oleh alamat random yang di generate oleh faker
3. "place_region" di isi oleh kota random yang di generate oleh faker
4. "place_price" di isi oleh angka random yang di generate oleh faker dengan batasan (min = 100000, max = 500000)
5. "place_open" di isi oleh waktu random yang di generate oleh faker
6. "place_close" di isi oleh waktu random yang di generate oleh faker
7. "place_type" di isi oleh array type yang telah dibuat, type yang dimasukkan akan random
