# EKİN Kurumsal Bağlantı Sayfası

Logo, firma tanıtımı, sosyal medya ve kurumsal bağlantıların tek bir mobil sayfada toplandığı, görsel düzenleyicisi olan dijital kartvizit.

## Ziyaretçi ve düzenleyici

- Müşteri sayfası: `https://eldorsop.github.io/EKINQR/`
- Düzenleyici: `https://eldorsop.github.io/EKINQR/?duzenle=1`
- Firma adı, tanıtım, logo ve kapak görseli; sosyal medya adresleri; link, telefon, e-posta, WhatsApp, vCard, başlık, metin, görsel ve ayırıcı widget'ları.
- Sıralama, gizleme, kopyalama, silme ve geri al/ileri al.
- Kurumsal renk geçişi, sade ve koyu temalar; renkler, yazı boyutu, köşeler, aralık ve saydamlık.

## Gerçek yayınlama

**Tek gereken dosya `index.html`.** Bağımlılık, derleme, sunucu veya API anahtarı gerekmez. Tasarım paneli ziyaretçinin tarayıcısında çalışır; GitHub'a doğrudan yazmaz.

1. Düzenleyicide tasarımı hazırlayın.
2. **Yayınla → Yayın kodunu kopyala** seçin. Kod, logo ve görseller dahil tasarımın tamamını içerir.
3. GitHub'daki `index.html` dosyasını düzenleyin, içeriğini bu kodla değiştirip **Commit changes** ile kaydedin.
4. **Settings → Pages → Deploy from a branch → main → /(root)** ayarında yayımlayın.
5. GitHub Pages yayını tamamlandığında müşterilere sorgu parametresi olmayan ana sayfa adresini gönderin.

Yayın kodu `index.html indir` düğmesiyle de alınabilir. İndirme veya pano izni yoksa kod kutusundaki **Kodu seç** düğmesiyle elle kopyalanabilir.

**Taslağı kaydet** yalnızca mevcut tarayıcıda saklar; müşteriler taslağı görmez. Müşteri sayfası daima HTML dosyasındaki yayımlanmış tasarımı gösterir. Yeni yayınlar için aynı adımları tekrarlayın. Önceki tasarımlar JSON yedeğiyle taşınabilir. Düzenleyicinin açık olması ziyaretçilere siteyi değiştirme yetkisi vermez; sunucuda yazma veya ortak kayıt işlemi yoktur.

## Geliştirme ve doğrulama

Dosya doğrudan bir statik HTTP sunucusuyla çalışır. Repodaki Node araçları isteğe bağlı geliştirme/test içindir:

```sh
npm ci --cache /tmp/ekinqr-npm-cache
npm run dev -- --port 5173 --strictPort
npm test
npm run build
```

Testler `/usr/bin/chromium` kullanır; başka yol için `CHROMIUM_PATH` ayarlanabilir. `npm run build` tek dosyalık siteyi `dist/` içine kopyalar. Daldan kök dizin yayını için `dist` veya `docs` gerekmez.

Telefon, e-posta, web bağlantısı ve vCard işlevleri uygulanmıştır. Sosyal medya adresleri bilinmediği için boş başlar. İlk logo yerel SVG taslağıdır; kurumsal logo yüklenerek değiştirilebilir.
