import type { Dictionary } from '../i18n';

/**
 * Türkçe.
 *
 * Typed as `Dictionary`, so this file must match `en.ts` key for key — a
 * missing translation fails the build instead of falling back to English
 * silently.
 *
 * Çeviri notları:
 *  - `hero.headline` bir kelime dizisidir; her kelime ayrı animasyonla girer.
 *    Çeviriyi de kelimelere bölün ve amber vurguyu taşıyacak kelimeye
 *    `mark: true` verin.
 *  - `{ before, mark, after }` yapısındaki başlıklarda `mark` kısmı amber
 *    vurguyla gösterilir; vurgulanan kelime İngilizcedekiyle aynı yerde olmak
 *    zorunda değildir.
 */
export const tr: Dictionary = {
  meta: {
    title: 'Dünyanın en iyi üniversiteleri için sınav hazırlığı',
    description:
      'Yurt dışındaki en iyi üniversitelere başvuran öğrenciler için DSAT, UDSP, IELTS, TOEFL, PTE ve YDS hazırlığı.',
  },

  common: {
    prep: 'hazırlık',
    skipToContent: 'İçeriğe geç',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    homeAria: 'ABA Tests Prep — ana sayfa',
    languageAria: 'Dili değiştir',
    primaryNav: 'Ana menü',
    backHome: 'Ana sayfaya dön',
  },

  site: {
    positioning: 'Yurt dışında okumak için akıllı hazırlık.',
    tagline: 'Dünya üniversitelerine giden öğrenciler için sınav hazırlığı.',
    rights: 'Tüm hakları saklıdır.',
  },

  nav: {
    exams: 'Sınavlar',
    method: 'Yöntem',
    pricing: 'Fiyatlar',
    results: 'Sonuçlar',
    blog: 'Blog',
  },

  cta: {
    primary: 'Ücretsiz seviye analizi al',
    secondary: 'Nasıl işlediğini gör',
    login: 'Giriş yap',
    whatsapp: 'WhatsApp’tan yazın',
    talkToUs: 'Bize ulaşın',
    emailUs: 'E-posta gönderin',
  },

  banners: {
    hero: 'Uluslararası bir sınava hazırlanan bir ABA Tests Prep öğrencisi.',
    journey: 'Bir öğrencinin ilk denemeden nihai puana giden yolu.',
    upward: 'Hedef puana doğru yükselen ilerleme.',
    community: 'ABA Tests Prep öğrencileri bir arada.',
  },

  hero: {
    eyebrow: 'Dünyanın en iyi üniversiteleri için sınav hazırlığı',
    headline: [
      { text: 'Seni' },
      { text: 'en' },
      { text: 'iyi' },
      { text: 'üniversitelere', mark: true },
      { text: 'götüren' },
      { text: 'sınavlara' },
      { text: 'hazırlan.' },
    ],
    sub: 'DSAT · UDSP · IELTS · TOEFL · PTE · YDS',
    scrollHint: 'Kaydır',
  },

  marquee: {
    label: 'Öğrencilerimizin rotası',
  },

  gap: {
    eyebrow: 'Fark',
    lead: 'Çoğu öğrenci çok çalışır.',
    before: 'Biz ',
    mark: 'doğru',
    after: ' çalışmasını sağlarız.',
    ctaLabel: 'Eksiklerini bul — ücretsiz',
  },

  examsSection: {
    eyebrow: 'Hazırladığımız sınavlar',
    headline: 'Altı sınav. Tek yöntem.',
    sub: 'Her sınavın en kısa yolu vardır. Biz onu biliyoruz.',
  },

  method: {
    eyebrow: 'Nasıl işliyor',
    headline: 'Dört adım, tam bu sırayla.',
    ctaLabel: '01. adımla başla — ücretsiz',
    steps: [
      { index: '01', title: 'Teşhis', line: 'Gerçek eksiklerini bulan ücretsiz bir test.' },
      { index: '02', title: 'Plan', line: 'Hedef puanına giden yol haritası.' },
      { index: '03', title: 'Çalışma', line: 'Puan kaybettiğin yerlere odaklı pratik.' },
      { index: '04', title: 'Performans', line: 'Hazır gir, yerleşmiş çık.' },
    ],
  },

  why: {
    eyebrow: 'Neden ABA',
    before: 'Heves değil, ',
    mark: 'kanıt.',
    after: '',
    pillars: [
      { title: 'Kanıta dayalı', line: 'Her plan teşhis verisiyle şekillenir.' },
      { title: 'Kişiye özel', line: 'Rafın değil, senin müfredatın.' },
      { title: 'Uzman mentorluk', line: 'Bu sınavları ezbere bilen eğitmenler.' },
    ],
    authorityRole: 'Akademik danışman',
    authorityNote: 'Yöntemimizin akademik denetimi.',
    photoPending: 'Fotoğraf eklenecek',
  },

  pricing: {
    eyebrow: 'Fiyatlar',
    headline: 'İki adım. İlki ücretsiz.',
    sub: 'Nerede olduğunu ücretsiz öğren. Yalnızca farkı kapatmak için öde.',
    free: {
      kicker: 'Birinci adım',
      name: 'Ücretsiz seviye analizi',
      price: 'Ücretsiz',
      priceNote: 'Kart yok, taahhüt yok',
      includes: [
        'Kendi sınavında, gerçek süreyle tam bir deneme',
        'Mevcut seviyen ve arkasındaki eksikler',
        'Hedef puanın için gerekenlerin dürüst cevabı',
        'Devam etsen de etmesen de sende kalan yazılı özet',
      ],
      cta: 'Ücretsiz analizini al',
    },
    premium: {
      kicker: 'İkinci adım',
      name: 'Premium Hazırlık',
      priceNote: 'Tam kapsamlı program',
      includes: [
        'Tam teşhis ve ulaşılabilirlik değerlendirmesi',
        'Zayıf noktalarına göre kişisel plan',
        'Uzman eğitmenlerle birebir koçluk',
        'Sınırsız süreli deneme, her biri geri bildirimli',
        'Başvuru ve puan gönderim desteği',
        'Dersler arasında eğitmenine doğrudan erişim',
      ],
      cta: 'Premium hakkında konuşalım',
    },
  },

  results: {
    eyebrow: 'Sonuçlar',
    headline: 'Kendimizi bağladığımız sayılar.',
    line: 'Nereye varacağın, nereden başladığına bağlı.',
    stats: {
      students: 'Hazırlanan öğrenci',
      improvement: 'Ortalama puan artışı',
      target: 'Hedef seviyesine ulaştı',
      offers: 'Alınan üniversite kabulü',
    },
  },

  midCta: {
    eyebrow: 'Buradan başla',
    headline: 'Nerede olduğundan emin değil misin?',
    headlineMark: 'Ücretsiz öğren.',
  },

  finalCta: {
    eyebrow: 'Son bir şey',
    headline: 'Hedef puanının bir son tarihi var.',
  },

  faq: {
    eyebrow: 'Sorular',
    headline: 'Randevudan önce.',
    items: [
      {
        q: 'Hazırlık ne kadar sürer?',
        a: 'Küçük bir fark için altı-sekiz hafta, büyük bir fark için üç-altı ay. Hangisi olduğunu teşhis söyler.',
      },
      {
        q: 'Hangi sınav bana uygun?',
        a: 'Üniversite listen belirler. Bunu ücretsiz analizde birlikte kontrol ederiz.',
      },
      {
        q: 'Premium Hazırlık neleri kapsıyor?',
        a: 'Teşhis, kişisel plan, birebir koçluk, sınırsız değerlendirilmiş deneme ve başvuru desteği. Süre, teşhis sonunda belirlenir.',
      },
      {
        q: 'Online mı, yüz yüze mi?',
        a: 'İkisi de. Her iki durumda da aynı materyal, aynı takip.',
      },
      {
        q: 'Ücretsiz seviye analizinde ne oluyor?',
        a: 'Sınav koşullarında gerçek bir deneme, ardından seviyen hakkında dürüst bir değerlendirme.',
      },
      {
        q: 'Hedefim gerçekçi değilse?',
        a: 'Bunu teşhis aşamasında, hiçbir ödeme yapmadan önce söyleriz.',
      },
    ],
  },

  footer: {
    explore: 'Keşfet',
    exams: 'Sınavlar',
    legal: 'Yasal',
    follow: 'Takip et',
    contact: 'İletişim',
    legalLabels: {
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Koşulları',
      cancellation: 'İptal Politikası',
    },
  },

  exams: {
    dsat: {
      name: 'DSAT',
      fullName: 'Dijital SAT',
      hook: 'ABD ve dünya üniversiteleri için. Adaptif, 1600 üzerinden.',
      purpose: 'ABD ve dünya üniversitelerinde lisans başvurusu.',
      audience: 'Yurt dışında lisans için başvuran lise öğrencileri.',
      intro:
        'SAT artık dijital ve adaptif. Her bölümün ikinci modülü birinciye göre değişir; bu yüzden baştaki doğruluk katlanarak etki eder. Sınava eski kâğıt testi gibi hazırlanmak, öğrencilerin zaten bildikleri soruları kaybetmesinin en yaygın nedeni.',
      format: [
        { section: 'Okuma & Yazma', detail: 'Kısa metinlerden oluşan iki adaptif modül, her metinde bir soru.' },
        { section: 'Matematik', detail: 'İki adaptif modül; hesap makinesi baştan sona serbest.' },
        { section: 'Puanlama', detail: 'İki bölüm puanının toplamı, 1600 üzerinden.' },
        { section: 'Uygulama', detail: 'Resmî sınav uygulaması üzerinden dizüstü ya da tablette.' },
      ],
      prep: [
        { title: 'Adaptif odaklı tempo', body: 'İlk modül ikincinin tavanını belirler; bu yüzden zamanlama içerikten önce gelir.' },
        { title: 'Hata sınıflandırma', body: 'Her yanlış sınıflandırılır — bilgi eksiği, yanlış okuma ya da süre. Farklı sorun, farklı çözüm.' },
        { title: 'Tam dijital denemeler', body: 'Aynı arayüz, aynı koşullar; böylece sınav günü prova gibi geçer.' },
      ],
    },
    udsp: {
      name: 'UDSP',
      fullName: 'Alternatif kabul yolu',
      hook: 'Alternatif bir kabul yolu — uygun olan öğrenciler için.',
      purpose: 'Yurt dışına yerleşmede alternatif bir kabul yolu.',
      audience: 'En güçlü yanı tek bir sınav puanıyla anlatılamayan öğrenciler.',
      intro:
        'UDSP, en güçlü yanı tek bir sınav puanıyla anlatılamayan öğrencilere uygun. Zaman ayırmadan önce gereklilikleri profilinle karşılaştırıyoruz.',
      format: [
        { section: 'Yapı', detail: 'TODO — yayına almadan önce güncel resmî format doğrulanmalı.' },
        { section: 'Uygunluk', detail: 'TODO — güncel başvuru koşulları doğrulanmalı.' },
      ],
      prep: [
        { title: 'Önce uygunluk', body: 'Bu yolun hedef listene gerçekten hizmet edip etmediğini belirleyen ücretsiz bir görüşme.' },
        { title: 'Gereklilik eşlemesi', body: 'Profilin ve gereklilikler, madde madde, gerçekçi bir takvimle.' },
        { title: 'Rehberli hazırlık', body: 'Sürecin gerçekten ölçtüğü şey üzerine, kontrol noktalarıyla yapılandırılmış çalışma.' },
      ],
    },
    ielts: {
      name: 'IELTS',
      fullName: 'International English Language Testing System',
      hook: 'Dünyada en yaygın kabul gören İngilizce sınavı.',
      purpose: 'Dünya genelinde üniversite, vize ve göç için İngilizce yeterliliği.',
      audience: 'Kayıtlı bir band puanına ihtiyacı olan herkes.',
      intro:
        'IELTS bir İngilizce sınavından çok bir İngilizce performansı. Band tanımları öğretilebilir, çok belirli davranışları ödüllendirir — çoğu öğrenci yarım bandı kelime bilgisine değil, alışkanlıklara kaptırır.',
      format: [
        { section: 'Dinleme', detail: 'Dört kayıt, kırk soru, tek dinletim.' },
        { section: 'Okuma', detail: 'Üç uzun metin — Academic ya da General Training.' },
        { section: 'Yazma', detail: 'İki görev: veri ya da mektup görevi, ardından kompozisyon.' },
        { section: 'Konuşma', detail: 'Görevliyle yüz yüze, üç bölümlük görüşme.' },
      ],
      prep: [
        { title: 'Band tanımları, sesli', body: '6.5 ile 7.5 arasındaki farkı kendi kayıtlı cevaplarında birebir görürsün.' },
        { title: 'Gerçekten okunan yazma', body: 'Görevler tepesinde bir puanla değil, dört ölçüt üzerinden not düşülmüş olarak geri gelir.' },
        { title: 'Baskı altında konuşma', body: 'Görevli tarzı bir eşle deneme görüşmeleri: kaydedilir, incelenir, tekrarlanır.' },
      ],
    },
    toefl: {
      name: 'TOEFL iBT',
      fullName: 'Test of English as a Foreign Language',
      hook: 'Akademik İngilizce; Kuzey Amerika üniversitelerinin tercihi.',
      purpose: 'Çoğunlukla Kuzey Amerika üniversiteleri için İngilizce yeterliliği.',
      audience: 'TOEFL’un tercih edildiği yerlere başvuran öğrenciler.',
      intro:
        'TOEFL bir şey okumanı, bir şey dinlemeni, sonra ikisinin ilişkisini anlatmanı ister. İngilizcesi güçlü öğrencilerin bile zorlanmasının nedeni bu: sınav dil kadar not tutmayı ve sentezi de ölçüyor.',
      format: [
        { section: 'Okuma', detail: 'Soru setleriyle akademik metinler.' },
        { section: 'Dinleme', detail: 'Dersler ve kampüs diyalogları.' },
        { section: 'Konuşma', detail: 'Bağımsız ve bütünleşik görevler, kayıtlı.' },
        { section: 'Yazma', detail: 'Bütünleşik bir görev ve akademik tartışma cevabı.' },
      ],
      prep: [
        { title: 'Bir beceri olarak not tutma', body: 'Dersler için tekrarlanabilir bir kısaltma sistemi — en etkili ve en az çalışılan TOEFL alışkanlığı.' },
        { title: 'Kalıp değil, yapı', body: '45 saniyelik sürede dağılmayan, ezber gibi durmayan konuşma yapıları.' },
        { title: 'Puanlanan denemeler', body: 'Resmî değerlendirme ölçütlerine göre notlanan tam denemeler ve yeniden puanlama planı.' },
      ],
    },
    pte: {
      name: 'PTE',
      fullName: 'Pearson Test of English',
      hook: 'Hızlı, bilgisayarla puanlanıyor; İngiltere ve Avustralya’da yaygınlaşıyor.',
      purpose: 'İngiltere ve Avustralya üniversiteleri ve vizeleri için İngilizce yeterliliği.',
      audience: 'Sonucu hızlı almak isteyen öğrenciler.',
      intro:
        'PTE bir algoritmayla puanlanır ve bu, hazırlığı baştan değiştirir. İkna edilecek bir görevli yok; tercihleri bilinen bir puanlama motoru var. Neyi ödüllendirdiğini öğrenen öğrenciler hızlı ilerliyor.',
      format: [
        { section: 'Konuşma & Yazma', detail: 'Birleşik bölüm — sesli okuma, betimleme, özetleme, kompozisyon.' },
        { section: 'Okuma', detail: 'Çoktan seçmeli, sıralama ve boşluk doldurma.' },
        { section: 'Dinleme', detail: 'Sözlü metin özetleme, dikte ve anlama soruları.' },
        { section: 'Puanlama', detail: 'Bilgisayarla değerlendirilir; sonuçlar genelde hızlı döner.' },
      ],
      prep: [
        { title: 'Motora göre çalışma', body: 'Akıcılık ve telaffuz orantısız ağırlık taşır. Sadece cevabı değil, sunumu da çalışırız.' },
        { title: 'Yüksek verimli soru tipleri', body: 'Birkaç soru tipi aynı anda birden fazla beceri puanını besler. Önce onlar.' },
        { title: 'Süreli tam denemeler', body: 'Gerçek süreyle tam denemeler ve soru tipi bazında doğruluk takibi.' },
      ],
    },
    yds: {
      name: 'YDS',
      fullName: 'Yabancı Dil Bilgisi Seviye Tespit Sınavı',
      hook: 'Türkiye’nin akademik İngilizce sınavı. Gramer yoğun, öğrenilebilir.',
      purpose: 'Türkiye’de akademik ve mesleki İngilizce belgelendirmesi.',
      audience: 'Türkiye’de geçerli bir İngilizce puanına ihtiyacı olan öğrenciler ve profesyoneller.',
      intro:
        'Soru tipleri yıldan yıla tekrar eder, kelime kümesi sınırlıdır ve gramer ölçülebilir. Bu da YDS’yi öğrettiğimiz en çok geliştirilebilir sınavlardan biri yapar — çalışma hevesli değil sistemli olduğu sürece.',
      format: [
        { section: 'Kelime & gramer', detail: 'Hedefli tek soruluk maddeler.' },
        { section: 'Cloze & cümle tamamlama', detail: 'Bağlama dayalı boşluk doldurma.' },
        { section: 'Çeviri', detail: 'Her iki yönde, İngilizce ve Türkçe.' },
        { section: 'Okuma & anlatım', detail: 'Metinler, diyalog tamamlama, paragraf bütünlüğü.' },
      ],
      prep: [
        { title: 'Sınırlı kelime listesi, aralıklı', body: 'Sık geçen kelimeler aralıklı tekrar takvimiyle, tanımaya değil hatırlamaya kadar.' },
        { title: 'Soru tipi taramaları', body: 'Bir soru tipi çok sayıda çıkmış soruda ustalaşana kadar çalışılır, sonra diğerine geçilir.' },
        { title: 'Süreli çıkmış sorular', body: 'Sınav koşullarında tam oturumlar ve tip bazında doğruluk takibi.' },
      ],
    },
  },

  pages: {
    examsIndex: {
      eyebrow: 'Sınavlar',
      title: 'Altı sınav, altı farklı',
      markWord: 'problem.',
      lede: 'Gireceğin sınavı seç.',
      ctaLine: 'Üniversite listenin hangisini istediğinden emin değil misin?',
      cta: 'Bize sor — beş dakika sürer',
    },
    examDetail: {
      eyebrowSuffix: 'Sınav',
      whatItIs: 'Nedir',
      format: 'Format',
      formatHeadline: 'Sınav nasıl kuruluyor.',
      howWePrep: 'Nasıl hazırlıyoruz',
      keyDates: 'Önemli tarihler',
      keyDatesHeadline: 'Ne zaman girebilirsin.',
      keyDatesTodo:
        'Sınav tarihleri ve başvuru son günleri henüz eklenmedi. Resmî kurumdan doğrulanmış bilgileri ekleyin — her yıl değişir ve tahmin edilemez.',
      otherExams: 'Diğer sınavlar',
      whatFor: 'Ne için',
      whoFor: 'Kimin için',
      ctaHeadline: 'Nerede olduğunu öğren.',
    },
    method: {
      eyebrow: 'Yöntem',
      title: 'Teşhis, plan, çalışma,',
      markWord: 'performans.',
      lede: 'Her öğrenci için aynı dört adım.',
      principlesEyebrow: 'İlkeler',
      principlesHeadline: 'Neden bu sırayla.',
      principles: [
        { title: 'Öğretmeden önce ölç', text: 'Gerçek koşullarda bir deneme yapılmadan hiçbir plan yazılmaz.' },
        { title: 'Her hatayı sınıflandır', text: 'Bilgi eksiği, yanlış okuma ve süre sorunu puan raporunda birbirinin aynısı görünür.' },
        { title: 'İlk günden süreyle çalış', text: 'Süresiz doğruluk, rahatlatan ama çok az şey öngören bir sayıdır.' },
        { title: 'Neyi atlayacağına karar ver', text: 'Her plan, çalışılmayacak konuları da açıkça yazar.' },
      ],
      cta: 'Ücretsiz teşhisle başla',
    },
    about: {
      eyebrow: 'Hakkımızda',
      title: 'Teşhis üzerine kurulmuş bir',
      markWord: 'hazırlık.',
      lede: 'Herkese aynı şekilde anlatılan sabit bir müfredat, çok belirli şeyleri ölçen sınavlara uymuyor.',
      body: [
        { heading: 'Ne yapıyoruz', text: 'Öğrencileri uluslararası üniversite kabulünün önünü açan sınavlara hazırlıyor, her planı teşhisin bulduğu eksiklere göre kuruyoruz.' },
        { heading: 'Nasıl çalışıyoruz', text: 'İlerleme, haftanın ne kadar yorucu geçtiğine göre değil deneme verisine göre ölçülür. Bir sayı kımıldamıyorsa plan değişir.' },
        { heading: 'Kimlerle çalışıyoruz', text: 'Yurt dışına başvuran öğrenciler ve belgeli İngilizce puanı gereken profesyoneller. İki yıl önce de sekiz hafta önce de gelinebilir — planlar farklı, ikisi de mümkün.' },
      ],
      oversightHeadline: 'Akademik denetim',
      oversightLine: 'teşhis, planlama ve ilerleme ölçümü konusunda danışmanlık veriyor.',
      todoAuthority: 'Onaylı biyografi ve kesinleşmiş unvan hâlâ bekleniyor. Kendisi adına hiçbir metin yazılmamalı.',
      todo: 'Kuruluş hikâyesi, ekip, lokasyonlar ve akreditasyonlar iletilecek.',
    },
    results: {
      eyebrow: 'Sonuçlar',
      title: 'Sana',
      markWord: 'gösterebildiklerimiz.',
      lede: 'Puan verileri, tercihler ve sonuçlar — yalnızca doğrulandıktan sonra yayımlanır.',
      statement: 'Arkasında duramayacağımız bir sayıyı göstermektense hiçbir şey göstermemeyi tercih ederiz.',
      todo: 'Bu sayfa herkese açık bağlanmadan önce doğrulanmış puan verileri, tercihler ve öğrenci yorumları iletilmeli.',
      cta: 'Önce kendi sayılarını öğren',
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Sınavlar ve',
      markWord: 'kabul üzerine.',
      lede: 'Hazırlık ve başvuru süreci üzerine pratik yazılar.',
      empty: 'İlk yazılar hazırlanıyor.',
      todo: 'Henüz yayımlanmış yazı yok. Yayına almadan önce bu rotayı bir CMS’e ya da MDX’e bağlayın.',
      followCta: 'Bu arada bizi takip edin',
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'Ücretsiz seviye analizini',
      markWord: 'planla.',
      lede: 'Bir teşhis oturumu, bir dürüst konuşma.',
      getInTouch: 'Bize ulaşın',
      whatsappNote: 'En hızlı yanıt',
      nextHeadline: 'Sonra ne oluyor.',
      steps: [
        { title: 'Bize yazın', text: 'Sınavınızı ve yaklaşık takviminizi iletin.' },
        { title: 'Denemeye girin', text: 'Gerçek koşullarda gerçek bir deneme.' },
        { title: 'Değerlendirmenizi alın', text: 'Seviyeniz, eksikleriniz ve gerçekçi bir hedef.' },
      ],
      todo: 'Randevu formu / takvim bağlantısı henüz bağlanmadı.',
      todoContacts:
        'WhatsApp numarasını ve herkese açık e-posta adresini /src/content/site.ts içinde doğrulayın — ikisi de geçici.',
    },
    login: {
      eyebrow: 'Öğrenci portalı',
      title: 'Portalına',
      markWord: 'giriş yap.',
      lede: 'Planın, deneme sonuçların ve bir sonraki dersin.',
      statement: 'Öğrenci portalı henüz yayında değil.',
      body: 'O zamana kadar planın ve programın doğrudan eğitmeninden geliyor.',
      todo: 'Kimlik doğrulama uygulanmadı. Bu sayfa yalnızca menü ve alt bilgi bağlantıları çalışsın diye var — hiçbir bilgi toplanmıyor, saklanmıyor veya iletilmiyor.',
      cta: 'Eğitmenine ulaş',
    },
    legal: {
      eyebrow: 'Yasal',
      statement: 'Bu metin henüz yayımlanmadı.',
      body: 'Yayımlanmadan önce bu bilgiye ihtiyacınız varsa bize yazın, yazılı olarak yanıtlayalım.',
      privacy: {
        title: 'Gizlilik',
        markWord: 'Politikası.',
        lede: 'ABA Tests Prep kişisel verileri nasıl topluyor, kullanıyor ve saklıyor.',
        todo: 'Gizlilik politikası metni müşteri tarafından iletilecek. Gerçekte toplanan veriyi yansıtmalı ve Türkiye ile AB’deki öğrenciler için KVKK ve GDPR gerekliliklerini karşılamalı. Hazır şablon yayımlamayın.',
      },
      terms: {
        title: 'Kullanım',
        markWord: 'Koşulları.',
        lede: 'Bir program satın alırken kabul ettiğiniz koşullar.',
        todo: 'Kullanım koşulları müşteri tarafından iletilecek: Premium Hazırlık kapsamı, ödeme, planlama ve puan beklentisinin sınırları.',
      },
      cancellation: {
        title: 'İptal',
        markWord: 'Politikası.',
        lede: 'Erteleme, iptal ve iade.',
        todo: 'İptal ve iade politikası müşteri tarafından iletilecek — erteleme için bildirim süreleri ve program ücretine ilişkin iade koşulları.',
      },
    },
    notFound: {
      eyebrow: '404',
      title: 'Bu sayfa müfredat dışına çıktı.',
      lede: 'Bağlantı bozuk ya da sayfa taşınmış.',
      cta: 'Sınavlara göz at',
    },
  },
};
