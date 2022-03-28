const { Telegraf, Markup, Telegram } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
const telegram = new Telegram(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  try {
    await ctx.reply(
      `Xush kelibsiz!\nДобропожаловать!`,
      Markup.keyboard([
        [
          Markup.button.callback("🇺🇿 O`zbekcha"),
          Markup.button.callback("🇷🇺 Руский"),
        ],
      ])
        .oneTime()
        .resize()
    );
  } catch (error) {
    console.error(error);
  }
});

// Язык вернёмся
bot.hears("🌏 Язык", async (ctx) => {
  try {
    await ctx.reply(
      "🌏 Язык",
      Markup.keyboard([
        [
          Markup.button.callback("🇺🇿 O`zbekcha"),
          Markup.button.callback("🇷🇺 Руский"),
        ],
      ])
        .oneTime()
        .resize()
    );
  } catch (error) {
    console.error(error);
  }
});
// Tilga qaytamiz
bot.hears("🌏 Til", async (ctx) => {
  try {
    await ctx.reply(
      "🌏 Til",
      Markup.keyboard([
        [
          Markup.button.callback("🇺🇿 O`zbekcha"),
          Markup.button.callback("🇷🇺 Руский"),
        ],
      ])
        .oneTime()
        .resize()
    );
  } catch (error) {
    console.error(error);
  }
});
// Главная страница
bot.hears("🏠 Главное меню", async (ctx) => {
  try {
    await ctx.reply(
      `Xush kelibsiz!\nДобропожаловать!`,
      Markup.keyboard([
        [
          Markup.button.callback("🇺🇿 O`zbekcha"),
          Markup.button.callback("🇷🇺 Руский"),
        ],
      ])
        .oneTime()
        .resize()
    );
  } catch (error) {
    console.error(error);
  }
});
// Bosh saxifa
bot.hears("🏠 Bosh saxifa", async (ctx) => {
  try {
    await ctx.reply(
      `Xush kelibsiz!\nДобропожаловать!`,
      Markup.keyboard([
        [
          Markup.button.callback("🇺🇿 O`zbekcha"),
          Markup.button.callback("🇷🇺 Руский"),
        ],
      ])
        .oneTime()
        .resize()
    );
  } catch (error) {
    console.error(error);
  }
});

bot.hears("🇺🇿 O`zbekcha", async (ctx) => {
  try {
    await ctx.reply(
      "O`zbek",
      Markup.keyboard([
        [
          Markup.button.callback("📍Manzil", "btn_us_1"),
          Markup.button.callback("🗓Yangiliklar", "btn_us_2"),
        ],
        [
          Markup.button.callback("📝 Murojiat qoldirish", "btn_us_3"),
          Markup.button.callback("❗️ Mirgrantlarga", "btn_us_3-1"),
        ],
        [
          Markup.button.callback("⚙️ Sozlash", "btn_us_4"),
          Markup.button.callback("🖥 Bog'lanish", "btn_us_4-1"),
        ],
      ])
        .oneTime()
        .resize()
    );

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

bot.hears("🇷🇺 Руский", async (ctx) => {
  try {
    await ctx.reply(
      "Руский",
      Markup.keyboard([
        [
          Markup.button.callback("📍Адресс", "btn_ru_1"),
          Markup.button.callback("🗓Новости", "btn_ru_2"),
        ],
        [
          Markup.button.callback("📝 Оставить заявку", "btn_ru_3"),
          Markup.button.callback("❗️ Миргрантам", "btn_ru_3-1"),
        ],
        [
          Markup.button.callback("⚙️ Настройка", "btn_ru_4"),
          Markup.button.callback("🖥 Связаться", "btn_ru_4-1"),
        ],
      ])
        .oneTime()
        .resize()
    );

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

//Bog'lanish
bot.hears("🖥 Bog'lanish", async (ctx) => {
  try {
    await ctx.reply(
      "🖥 Bog'lanish",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("🌍 Web site", "btn_us_1"),
          Markup.button.callback("🎇 Instagram", "btn_us_2-1"),
          Markup.button.callback("🔵 Facebook", "btn_us_2-2"),
        ],
      ])
        .oneTime()
        .resize()
    );

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
//Связаться
bot.hears("🖥 Связаться", async (ctx) => {
  try {
    await ctx.reply(
      "🖥 Связаться",
      Markup.inlineKeyboard([
        [
          Markup.button.callback("🌍 Web site", "btn_us_1"),
          Markup.button.callback("🎇 Instagram", "btn_us_2-1"),
          Markup.button.callback("🔵 Facebook", "btn_us_2-2"),
        ],
      ])
        .oneTime()
        .resize()
    );

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

// Web site
bot.action("btn_us_1", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `<a href="http://www.migration.uz/">http://www.migration.uz</a>`
    );
  } catch (error) {
    console.error(error);
  }
});

// Instagram
bot.action("btn_us_2-1", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `<a href="https://www.instagram.com/migration_uzb/">migration_uzb</a>`
    );
  } catch (error) {
    console.error(error);
  }
});

//Mirgrantlarga
bot.hears("❗️ Mirgrantlarga", async (ctx) => {
  try {
    await ctx.reply(
      "❗️ Mirgrantlarga",
      Markup.keyboard([
        [
          Markup.button.callback("Mikrokredit ПФ-5785", "btn_us_5-1"),
          Markup.button.callback(
            "Ijtimoiy himoya resteri ПФ-4829",
            "btn_us_6-1"
          ),
        ],
        [
          Markup.button.callback("Lаbоr-migrаtiоn ПҚ-5205", "btn_us_7-1"),
          Markup.button.callback("⚙️ Sozlash", "btn_us_7"),
        ],
      ])
        .oneTime()
        .resize()
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
//Mirgrantlarga
bot.hears("❗️ Миргрантам", async (ctx) => {
  try {
    await ctx.reply(
      "❗️ Миргрантам",
      Markup.keyboard([
        [
          Markup.button.callback("Микрокредит ПФ-5785", "btn_ru_5-1"),
          Markup.button.callback(
            "Реестр социального обеспечения ПФ-4829",
            "btn_us_6-1"
          ),
        ],
        [
          Markup.button.callback("Lаbоr-migrаtiоn УП-5205", "btn_ru_7-1"),
          Markup.button.callback("⚙️ Настройка", "btn_ru_7"),
        ],
      ])
        .oneTime()
        .resize()
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

// Микрокредит ПФ-5785
bot.hears("Mikrokredit ПФ-5785", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `<b>Микрокредит ПФ-5785</b>
      
      <b><i>
      Указ Президента Республики Узбекистан от 20 августа 2019 года № ПФ-5785 «О мерах по дальнейшему усилению гарантий защиты граждан Республики Узбекистан и членов их семей, временно работающих за границей». Во втором абзаце пункта 3 указа Микрокредит Банк выдал 2 млн сумов узбекским мигрантам для оплаты труда за границей, на основании минимально необходимых документов (паспорт, заявление и запрос органа по труду) в течение банковского дня. сум по ставке 10% с 1 января 2020 года - по ставке рефинансирования Центрального банка Республики Узбекистан, с 1 января 2021 года - коммерческими банками на основе рыночных принципов выдачи микрозаймов по фиксированным ставкам. Кроме того, внедрена практика предоставления субсидии на покрытие суммы страховых взносов в размере 50 000 сумов по страхованию жизни и здоровья.</i></b>`
    );
  } catch (error) {
    console.error(error);
  }
});
// Ижтимоий ҳимоя реестри ПФ-4829
bot.hears("Ijtimoiy himoya resteri ПФ-4829", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `<b>Ижтимоий ҳимоя реестри ПФ-4829</b>
      
      <b><i>Ўзбекистон Республикаси Президентининг 2020 йилнинг 15 сентябрдаги “Хавфсиз, тартибли ва қонуний меҳнат миграцияси тизимини жорий қилиш чора-тадбирлари тўғрисида” фармонининг 11-бандида қарор ижросини таъминлаш бўйича Бандлик ва меҳнат муносабатлари вазирлиги ва Ҳалқ банки ўртасида томонидан Ташкиллаштирилган меҳнат миграцияси йўли билан вақтинчалик меҳнат фаолиятини амалга ошириш учун хорижга чиқиб кетаётган Ўзбекистон Республикаси фуқароларига микроқарзлар берилишини таъминлаш бўйича ҳамкорлик тўғрисида “Меморандум” тузилди. Меморандумга асосан Бандлик ва меҳнат муносабатлари вазирлигининг Бандликка кўмаклашиш давлат жамғармаси томонидан 10 млрд.сўм. миқдоридакредит линиялари очилди. Хусусан Ҳалқ банки томонидан “Ижтимоий ҳимоя реестри” ахборот тизими орқали кам таъминланган оила аъзоси сифатида эътироф этилган, “labor-migration.uz” дастурий мажмуасида рўйҳатга олинган меҳнат миграцияси йўли билан вақтинчалик меҳнат фаолиятини амалга ошириш учун хорижга чиқиб кетаётган жисмоний шахсларга 10 млн. сўмгача йўлкира ва патентини қоплаш учун “Ҳалқ банки” томонидан 1 йилга имтиёзли кредитларни ажратиш йўлга қўйлганини маълум қиламиз.</i></b>`
    );
  } catch (error) {
    console.error(error);
  }
});
// lаbоr-migrаtiоn ПҚ-5205
bot.hears("Lаbоr-migrаtiоn ПҚ-5205", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `<b>Lаbоr-migrаtiоn ПҚ-5205</b>
      
      <b><i>Ўзбекистон Республикаси Президентининг 2021 йилнинг 30 июльдаги “Хорижга ташкиллаштирилган меҳнат миграциясига кетаётган фуқароларни рағбатлантириш бўйича қўшимча чора-тадбирлар тўғрисида” қарорига кўра 2021 йил 1 сентябрдан бошлаб 2022 йил 1 сентябрга қадар “lаbоr-migrаtiоn” дастурий мажмуасида рўйхатдан ўтган, касб-ҳунар ёки хорижий тилларга ўқиган ва ташкиллаштирилган меҳнат миграциясига кетаётган фуқароларга:
      
      ➖ хорижий тиллар ёки касб бўйича малака имтиҳонларини топшириш билан боғлиқ харажатларини қоплаш учун, башарти улар муваффақиятли топширилганда – БҲМнинг 3 бараваригача миқдорда (810 минг сўм); 
      
      ➖ йўл чиптасини харид қилиш билан боғлиқ харажатларини қоплаш учун – БҲМнинг 2 бараваригача миқдорда (540 минг сўм);
      
      ➖ ривожланган давлатларда меҳнат фаолиятини амалга оширишга “ишчи виза”ни расмийлаштириш билан боғлиқ харажатларини қоплаш учун – БҲМнинг 5 бараваригача миқдорда (1 млн 350 минг сўмгача) компенсация тўланади.
      </i></b>`
    );
  } catch (error) {
    console.error(error);
  }
});
// Микрокредит ПФ-5785
bot.hears("Микрокредит ПФ-5785", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `<b>Микрокредит ПФ-5785</b>
      
      <b><i>
      Ўзбекистон Республикаси Президентининг 2019 йил 20 августдаги ПФ-5785-сонли “Хорижда вақтинчалик меҳнат фаолиятини амалга ошираётган Ўзбекистон Республикаси фуқаролари ва уларнинг оила аъзоларини ҳимоя қилиш кафолатларини янада кучайтириш чоралари тўғрисида”ги фармони қабул қилинган. Фармоннинг 3 банд иккинчи хатбошида Микрокредит банк томонидан, ўзбекистонлик мигрантларга хорижда ишга жойлашиш билан боғлиқ ҳаражатларни тўлаш учун, бир банк куни давомида тез расмийлаштирилган ҳолда энг кам талаб қилинадиган ҳужжатлар (паспорт, ариза ва меҳнат органининг илтимосномаси) асосида 2 млн. сўм миқдорида бир йил муддатга 2019 йилда тақдим этилаётган кредит фоиз ставкасининг 50 фоизи миқдоридаги тижорат банкининг маржасини ўз ичига олган ҳолда 10 фоизлик ставкада 2020 йил 1 январдан — Ўзбекистон Республикаси Марказий банкнинг қайта молиялаштириш ставкасида, 2021 йил 1 январдан — тижорат банклари томонидан бозор тамойиллари асосида мустақил равишда ўрнатиладиган ставкаларда микроқарзлар бериш йўлга қўйилган. Шунингдек, улар ҳаёти ва соғлиғини суғурталаш бўйича 50 000 сўмлик суғурта мукофоти суммасини қоплаш учун субсидия тақдим этиш амалиёти йўлга қўйилди.</i></b>`
    );
  } catch (error) {
    console.error(error);
  }
});
// Реестр социального обеспечения ПФ-4829
bot.hears("Реестр социального обеспечения ПФ-4829", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `<b>Реестр социального обеспечения ПФ-4829</b>
      
      <b><i>В соответствии с пунктом 11 Указа Президента Республики Узбекистан от 15 сентября 2020 года «О мерах по внедрению системы безопасной, упорядоченной и законной трудовой миграции» между Министерством занятости и трудовых отношений и Народным банком А Подписан Меморандум о взаимопонимании по обеспечению выдачи микрозаймов гражданам Республики Узбекистан, выезжающим за границу. Согласно меморандуму, Государственный фонд содействия занятости Министерства занятости и трудовых отношений предоставит 10 миллиардов сумов. были открыты кредитные линии. В частности, 10 млн. грн. Сообщаем Вам, что Народный банк Республики Узбекистан выделил льготные кредиты сроком на 1 год для покрытия командировочных расходов и патентов.</i></b>`
    );
  } catch (error) {
    console.error(error);
  }
});
// lаbоr-migrаtiоn ПҚ-5205
bot.hears("Lаbоr-migrаtiоn УП-5205", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `<b>Lаbоr-migrаtiоn УП-5205</b>
      
      <b><i>Согласно Постановлению Президента Республики Узбекистан от 30 июля 2021 года «О дополнительных мерах по стимулированию граждан, выезжающих за границу в целях организованной трудовой миграции» с 1 сентября 2021 года по 1 сентября 2022 года к изучению профессионального или иностранного языка гражданам, обучались и собираются в организованную трудовую миграцию:
      
      ➖ на покрытие расходов, связанных со сдачей квалификационных экзаменов по иностранным языкам или профессиям, в случае их успешной сдачи - в размере до 3-кратного размера БГМ (810 тыс. сум);
      
      ➖ на покрытие расходов, связанных с приобретением проездного билета - в размере до 2-х МРОТ (540 тыс.сум);
      
      ➖ Компенсация в размере до 5-кратного размера минимальной заработной платы (до 1 млн 350 тыс. сум) для покрытия расходов, связанных с оформлением «рабочей визы» для работы в развитых странах.
      </i></b>`
    );
  } catch (error) {
    console.error(error);
  }
});

// Murojiat qoldirish
bot.hears("📝 Murojiat qoldirish", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `<a href="http://www.migration.uz/application/create">Murojiat qoldirish uchun</a>`
    );
  } catch (error) {
    console.error(error);
  }
});
// Оставить заявку
bot.hears("📝 Оставить заявку", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `<a href="http://www.migration.uz/application/create">Оставить заявку</a>`
    );
  } catch (error) {
    console.error(error);
  }
});

// UZ manzil
bot.hears("📍Manzil", async (ctx) => {
  try {
    await ctx.reply(
      "Manzillar",
      Markup.keyboard([
        [
          Markup.button.callback("Hududiy filliallar", "btn_us_5"),
          Markup.button.callback("Konsulliklar", "btn_us_6"),
        ],
        [
          Markup.button.callback("Elchixonalar va vakolatxonalar", "btn_us_7"),
          Markup.button.callback("⚙️ Sozlash", "btn_us_7"),
        ],
      ])
        .oneTime()
        .resize()
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// RU Адрес
bot.hears("📍Адресс", async (ctx) => {
  try {
    await ctx.reply(
      "Адреса",
      Markup.keyboard([
        [
          Markup.button.callback("Региональные отделения", "btn_ru_5"),
          Markup.button.callback("Консульства", "btn_ru_6"),
        ],
        [
          Markup.button.callback("Посольства и представительства", "btn_ru_7"),
          Markup.button.callback("⚙️ Настройка", "btn_ru_8"),
        ],
      ])
        .oneTime()
        .resize()
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Yangiliklardan xabardor bolib borish
bot.hears("🗓Yangiliklar", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `<a href="https://t.me/migratsiyaagentligi">Yangiliklardan xabardor bolib borishingiz uchun</a>`
    );
  } catch (error) {
    console.error(error);
  }
});
// Будьте в курсе новостей
bot.hears("🗓Новости", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `<a href="https://t.me/migratsiyaagentligi">Будьте в курсе новостей </a>`
    );
  } catch (error) {
    console.error(error);
  }
});

// Настройки
bot.hears("⚙️ Настройка", async (ctx) => {
  try {
    await ctx.reply(
      "⚙️ Настройка",
      Markup.keyboard([
        [Markup.button.callback("🌏 Язык", "btn_ru_9")],
        [Markup.button.callback("🏠 Главное меню", "btn_ru_10")],
      ])
        .oneTime()
        .resize()
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Sozlash
bot.hears("⚙️ Sozlash", async (ctx) => {
  try {
    await ctx.reply(
      "⚙️ Sozlash",
      Markup.keyboard([
        [Markup.button.callback("🌏 Til", "btn_uz_9")],
        [Markup.button.callback("🏠 Bosh saxifa", "btn_uz_10")],
      ])
        .oneTime()
        .resize()
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

// Hududiy filliallar
bot.hears("Hududiy filliallar", async (ctx) => {
  try {
    await ctx.reply(
      "Filliallar",
      Markup.keyboard([
        [
          Markup.button.callback("Andijon", "btn_us_9"),
          Markup.button.callback("Buxoro", "btn_us_10"),
        ],
        [
          Markup.button.callback("Jizzax ", "btn_us_11"),
          Markup.button.callback("Qashqadaryo", "btn_us_12"),
        ],
        [
          Markup.button.callback("Navoiy ", "btn_us_13"),
          Markup.button.callback("Namangan", "btn_us_14"),
        ],
        [
          Markup.button.callback("Samarqand ", "btn_us_15"),
          Markup.button.callback("Surxandaryo", "btn_us_16"),
        ],
        [
          Markup.button.callback("Sirdaryo ", "btn_us_17"),
          Markup.button.callback("Toshkent viloyati", "btn_us_18"),
        ],
        [
          Markup.button.callback("Toshkent shahri ", "btn_us_19"),
          Markup.button.callback("Nukus", "btn_us_20"),
        ],
        [
          Markup.button.callback("Xorazm ", "btn_us_21"),
          Markup.button.callback("Farg'ona", "btn_us_22"),
        ],
        [Markup.button.callback("⚙️ Sozlash", "btn_us_7")],
      ])
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Региональные отделения
bot.hears("Региональные отделения", async (ctx) => {
  try {
    await ctx.reply(
      "Региональные отделения",
      Markup.keyboard([
        [
          Markup.button.callback("Андижан", "btn_ru_9"),
          Markup.button.callback("Бухара", "btn_ru_10"),
        ],
        [
          Markup.button.callback("Жиззах ", "btn_ru_11"),
          Markup.button.callback("Кашкадаря", "btn_ru_12"),
        ],
        [
          Markup.button.callback("Наваи ", "btn_ru_13"),
          Markup.button.callback("Наманган", "btn_ru_14"),
        ],
        [
          Markup.button.callback("Самарканд ", "btn_ru_15"),
          Markup.button.callback("Сурхандаря", "btn_ru_16"),
        ],
        [
          Markup.button.callback("Сирдаря ", "btn_ru_17"),
          Markup.button.callback("Ташкентская область", "btn_ru_18"),
        ],
        [
          Markup.button.callback("город Ташкент ", "btn_ru_19"),
          Markup.button.callback("Нукус", "btn_ru_20"),
        ],
        [
          Markup.button.callback("Хоразм ", "btn_ru_21"),
          Markup.button.callback("Фергана", "btn_ru_22"),
        ],
        [Markup.button.callback("⚙️ Настройка", "btn_ru_7")],
      ])
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Elchixonalar va vakolatxonalar
bot.hears("Elchixonalar va vakolatxonalar", async (ctx) => {
  try {
    await ctx.reply(
      "Vakolatxona va Elchixona",
      Markup.keyboard([
        [
          Markup.button.callback("Vakolatxona", "btn_us_23"),
          Markup.button.callback("Elchixona", "btn_us_24"),
        ],
        [Markup.button.callback("⚙️ Sozlash", "btn_us_7")],
      ])
        .oneTime()
        .resize()
    );

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Посольства и представительства
bot.hears("Посольства и представительства", async (ctx) => {
  try {
    await ctx.reply(
      "Посольства и представительства",
      Markup.keyboard([
        [
          Markup.button.callback("Представительства", "btn_ru_23"),
          Markup.button.callback("Посольства", "btn_ru_24"),
        ],
        [Markup.button.callback("⚙️ Настройка", "btn_ru_7")],
      ])
        .oneTime()
        .resize()
    );

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Представительства
bot.hears("Представительства", async (ctx) => {
  try {
    await ctx.reply(
      "Посольства",
      Markup.keyboard([
        [
          Markup.button.callback("Российская Федерация", "btn_ru_32"),
          Markup.button.callback("Республика Корея", "btn_koreya"),
        ],
        [Markup.button.callback("⚙️ Настройка", "btn_ru_7")],
      ])
        .oneTime()
        .resize()
    );

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Elchixona
bot.hears("Elchixona", async (ctx) => {
  try {
    await ctx.reply(
      "Elchixona",
      Markup.inlineKeyboard([
        [
          Markup.button.callback(
            "Бирлашган Араб Амирликларидаги элчихона",
            "btn_us_33"
          ),
          Markup.button.callback("Туркиядаги элчихона", "btn_us_34"),
        ],
        [
          Markup.button.callback("Афинадаги элчихона", "btn_us_35"),
          Markup.button.callback("Туркманистондаги элчихона", "btn_us_36"),
        ],
        [
          Markup.button.callback("Азарбайжондаги элчихона", "btn_us_37"),
          Markup.button.callback("Германиядаги элчихона", "btn_us_38"),
        ],
        [
          Markup.button.callback("Қирғизистондаги элчихона", "btn_us_39"),
          Markup.button.callback("Бельгиядаги элчихона", "btn_us_40"),
        ],
        [
          Markup.button.callback("Полшадаги элчихона", "btn_us_41"),
          Markup.button.callback("АҚШдаги элчихона", "btn_us_42"),
        ],
        [
          Markup.button.callback("Австрядаги элчихона", "btn_us_43"),
          Markup.button.callback("Ҳиндистондаги элчихона", "btn_us_44"),
        ],
        [
          Markup.button.callback("Екатеринбургдаги элчихона", "btn_us_45"),
          Markup.button.callback("Индонезиядаги элчихона", "btn_us_46"),
        ],
        [
          Markup.button.callback("Покистондаги элчихона", "btn_us_47"),
          Markup.button.callback("Украинадаги элчихона", "btn_us_48"),
        ],
        [
          Markup.button.callback("Малайзиядаги элчихона", "btn_us_49"),
          Markup.button.callback("Буюк Британиядаги элчихона", "btn_us_50"),
        ],
        [
          Markup.button.callback("Миср элчихонаси", "btn_us_51"),
          Markup.button.callback("Афғонистондаги элчихона", "btn_us_52"),
        ],
        [
          Markup.button.callback(
            "Саудиа Арабистони Подшоҳлигидаги элчихона",
            "btn_us_53"
          ),
          Markup.button.callback("Қувайтдаги элчихона", "btn_us_54"),
        ],
        [
          Markup.button.callback("Япониядаги элчихона", "btn_us_55"),
          Markup.button.callback("Эрондаги элчихона", "btn_us_56"),
        ],
        [
          Markup.button.callback("Исроилдаги элчихона", "btn_us_57"),
          Markup.button.callback("Цингапурдаги элчихона", "btn_us_58"),
        ],
        [
          Markup.button.callback("Кореядаги элчихона", "btn_us_59"),
          Markup.button.callback("Италиядаги элчихона", "btn_us_60"),
        ],
        [
          Markup.button.callback("Хитойдаги элчихона", "btn_us_61"),
          Markup.button.callback("Франциядаги элчихона", "btn_us_62"),
        ],
        [
          Markup.button.callback("Қозоғистондаги элчихона", "btn_us_63"),
          Markup.button.callback("Россиядаги элчихона", "btn_us_64"),
        ],
        [
          Markup.button.callback("Беларусдаги элчихона", "btn_us_65"),
          Markup.button.callback("Уммондаги Элчихона", "btn_us_66"),
        ],
        [Markup.button.callback("Испаниядаги элчихона", "btn_us_67")],
      ])
    );

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// vakolatxonalar
bot.hears("Vakolatxona", async (ctx) => {
  try {
    await ctx.reply(
      "Vakolatxona",
      Markup.keyboard([
        [
          Markup.button.callback("Россия Федерацияси", "btn_us_32"),
          Markup.button.callback("Корея Республикаси", "btn_koreya"),
        ],
        [Markup.button.callback("⚙️ Sozlash", "btn_us_7")],
      ])
        .oneTime()
        .resize()
    );

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Посольства
bot.hears("Посольства", async (ctx) => {
  try {
    await ctx.reply(
      "Посольства",
      Markup.inlineKeyboard([
        [
          Markup.button.callback(
            "Посольство в Объединенных Арабских Эмиратах",
            "btn_ru_33"
          ),
        ],
        [
          Markup.button.callback("Посольство в Турции", "btn_ru_34"),
          Markup.button.callback("Посольство в Малайзии", "btn_ru_49"),
        ],
        [
          Markup.button.callback("Посольство в Афинах", "btn_ru_35"),
          Markup.button.callback("Посольство в Туркменистане", "btn_ru_36"),
        ],
        [
          Markup.button.callback("Посольство в Азербайджане", "btn_ru_37"),
          Markup.button.callback("Посольство в Германии", "btn_ru_38"),
        ],
        [
          Markup.button.callback("Посольство в Кыргызстане", "btn_ru_39"),
          Markup.button.callback("Посольство в Бельгии", "btn_ru_40"),
        ],
        [
          Markup.button.callback("Посольство в Польше", "btn_ru_41"),
          Markup.button.callback("Посольство в США", "btn_ru_42"),
        ],
        [
          Markup.button.callback("Посольство в Австрии", "btn_ru_43"),
          Markup.button.callback("Посольство в Индии", "btn_ru_44"),
        ],
        [
          Markup.button.callback("Посольство в Екатеринбурге", "btn_ru_45"),
          Markup.button.callback("Посольство в Индонезии", "btn_ru_46"),
        ],
        [
          Markup.button.callback("Посольство в Пакистане", "btn_ru_47"),
          Markup.button.callback("Посольство в Украине", "btn_ru_48"),
        ],
        [
          Markup.button.callback(
            "Посольство в Соединенном Королевстве",
            "btn_ru_50"
          ),
        ],
        [
          Markup.button.callback("Посольство Египта", "btn_ru_51"),
          Markup.button.callback("Посольство в Афганистане", "btn_ru_52"),
        ],
        [
          Markup.button.callback(
            "Посольство Королевства Саудовская Аравия",
            "btn_ru_53"
          ),
        ],
        [
          Markup.button.callback("Посольство в Японии", "btn_ru_55"),
          Markup.button.callback("Посольство в Иране", "btn_ru_56"),
        ],
        [
          Markup.button.callback("Посольство в Израиле", "btn_ru_57"),
          Markup.button.callback("Посольство в Сингапуре", "btn_ru_58"),
        ],
        [
          Markup.button.callback("Посольство в Корее", "btn_ru_59"),
          Markup.button.callback("Посольство в Италии", "btn_ru_60"),
        ],
        [
          Markup.button.callback("Посольство в Китае", "btn_ru_61"),
          Markup.button.callback("Посольство во Франции", "btn_ru_62"),
        ],
        [
          Markup.button.callback("Посольство в Казахстане", "btn_ru_63"),
          Markup.button.callback("Посольство в России", "btn_ru_64"),
        ],
        [
          Markup.button.callback("Посольство в Беларуси", "btn_ru_65"),
          Markup.button.callback("Посольство в Омане", "btn_ru_66"),
        ],
        [
          Markup.button.callback("Посольство в Испании", "btn_ru_67"),
          Markup.button.callback("Посольство в Кувейте", "btn_ru_54"),
        ],
      ])
    );

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Konsulliklar
bot.hears("Konsulliklar", async (ctx) => {
  try {
    await ctx.reply(
      "Konsullar",
      Markup.inlineKeyboard([
        [Markup.button.callback("Бангконгдаги бош консулхона", "btn_us_68")],
        [Markup.button.callback("Дубайдаги бош консулхона", "btn_us_69")],
        [Markup.button.callback("Жиддадаги бош консулхона", "btn_us_70")],
        [Markup.button.callback("Истамбулдаги бош консулхона", "btn_us_71")],
        [Markup.button.callback("Қозондаги бош консулхона", "btn_us_72")],
        [Markup.button.callback("Шанхайдаги бош консулхона", "btn_us_73")],
        [Markup.button.callback("Франкфуртдаги бош консулхона", "btn_us_74")],
        [
          Markup.button.callback(
            "Санкт-Петурбургдаги бош консулхона",
            "btn_us_75"
          ),
        ],
        [Markup.button.callback("Ростовдаги бош консулхона", "btn_us_76")],
        [Markup.button.callback("Олмаотадаги бош консулхона", "btn_us_77")],
        [Markup.button.callback("Нью-Йоркдаги бош консулхона", "btn_us_78")],
        [Markup.button.callback("Новосибирскдаги бош консулхона", "btn_us_79")],
      ])
    );

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Консульства
bot.hears("Консульства", async (ctx) => {
  try {
    await ctx.reply(
      "Консульства",
      Markup.inlineKeyboard([
        [
          Markup.button.callback(
            "Генеральное консульство в Бангкоке",
            "btn_ru_68"
          ),
        ],
        [
          Markup.button.callback(
            "Генеральное консульство в Дубае",
            "btn_ru_69"
          ),
        ],
        [
          Markup.button.callback(
            "Генеральное консульство в Джидде",
            "btn_ru_70"
          ),
        ],
        [
          Markup.button.callback(
            "Генеральное консульство в Стамбуле",
            "btn_ru_71"
          ),
        ],
        [
          Markup.button.callback(
            "Генеральное консульство в Казани",
            "btn_ru_72"
          ),
        ],
        [
          Markup.button.callback(
            "Генеральное консульство в Шанхае",
            "btn_ru_73"
          ),
        ],
        [
          Markup.button.callback(
            "Генеральное консульство во Франкфурте",
            "btn_ru_74"
          ),
        ],
        [
          Markup.button.callback(
            "Генеральное консульство в Санкт-Петербурге",
            "btn_ru_75"
          ),
        ],
        [
          Markup.button.callback(
            "Генеральное консульство в Ростове",
            "btn_ru_76"
          ),
        ],
        [
          Markup.button.callback(
            "Генеральное консульство в Алматы",
            "btn_ru_77"
          ),
        ],
        [
          Markup.button.callback(
            "Генеральное консульство в Нью-Йорке",
            "btn_ru_78"
          ),
        ],
        [
          Markup.button.callback(
            "Генеральное консульство в Новосибирске",
            "btn_ru_79"
          ),
        ],
      ])
    );

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

// filiallar
function infoMap(btn, text, lat, lan, name) {
  bot.hears(btn, async (ctx) => {
    try {
      await telegram.sendLocation(ctx.chat.id, lat, lan);
      await ctx.replyWithHTML(`${name}${text}`);
    } catch (error) {
      console.error(error);
    }
  });
}
// Andijon
infoMap(
  "Andijon",
  `\n\n<b>Filial raxbari:</b>\nСаттаров Гавхар Адилович\n\n<b>Tel raqami:</b>\n☎️95 202-33-55 (+998 90 571 47 77)`,
  41.37255691958309,
  69.288790291014,
  "Andijon filliali malumotlari"
);
// Buxoro
infoMap(
  "Buxoro",
  `\n\n<b>Filial raxbari:</b>\nХамдамов Анвар Нормуродович\n\n<b>Tel raqami:</b>\n☎️65 226-56-99 (93 686-11-78)`,
  39.764434871119164,
  64.40835581349384,
  "Buxoro filliali malumotlari"
);
// Jizzax
infoMap(
  "Jizzax",
  `\n\n<b>Filial raxbari:</b>\nАбдусаидов Сунатулло Хусанович\n\n<b>Tel raqami:</b>\n☎️72 226-91-87(93 992-95-59)`,
  40.11309002699019,
  67.83306872883537,
  "Jizzax filliali malumotlari"
);
// Qashqadaryo
infoMap(
  "Qashqadaryo",
  `\n\n<b>Filial raxbari:</b>\nРахимов Тожиддин Уралович\n\n<b>Tel raqami:</b>\n75 224-05-25(+998 98 777 34 37)`,
  38.83258775290569,
  65.80790130528706,
  "Qashqadaryo filliali malumotlari"
);
// Navoiy
infoMap(
  "Navoiy",
  `\n\n<b>Filial raxbari:</b>\nРажабов Қахрамон Разақович\n\n<b>Tel raqami:</b>\n☎️79 224-11-60(98 778-10-17)`,
  40.10912240280854,
  65.36061781349385,
  "Navoiy filliali malumotlari"
);
// Namangan
infoMap(
  "Namangan",
  `\n\n<b>Filial raxbari:</b>\nАпаков Муҳаммадаюбхон\n\n<b>Tel raqami:</b>\n☎️69 227-94-64(90 554-22-20)`,
  20.758670941406404,
  -0.000005728835389003358,
  "Namangan filliali malumotlari"
);
// Samarqand
infoMap(
  "Samarqand",
  `\n\n<b>Filial raxbari:</b>\nНормуратов Умид Мухтарович\n\n<b>Tel raqami:</b>\n☎️66 233-24-00(99 320-62-12)`,
  39.65524940525757,
  66.9665332711646,
  "Samarqand filliali malumotlari"
);
// Surxandaryo
infoMap(
  "Surxandaryo",
  `\n\n<b>Filial raxbari:</b>\nХамраев Рустам Усманович\n\n<b>Tel raqami:</b>\n☎️76 222-45-22(99 715-10-05)`,
  37.22043226460796,
  67.27771881349382,
  "Surxandaryo filliali malumotlari"
);
// Sirdaryo
infoMap(
  "Sirdaryo",
  `\n\n<b>Filial raxbari:</b>\nИсроилов Сирожиддин Мамарахимович\n\n<b>Tel raqami:</b>\n☎️67 225-55-59(94 407-18-07)`,
  40.497166345408885,
  68.77635181349383,
  "Sirdaryo filliali malumotlari"
);
// Toshkent viloyati
infoMap(
  "Toshkent viloyati",
  `\n\n<b>Filial raxbari:</b>\nБахромов Нодир Қодирбек ўғли\n\n<b>Tel raqami:</b>\n+998 99 999 96 99`,
  41.064729854845915,
  69.34362918650616,
  "Toshkent viloyati filliali malumotlari"
);
// Toshkent shahri
infoMap(
  "Toshkent shahri",
  `\n\n<b>Filial raxbari:</b>\nТешабаев Улуғбек Юлдашевич\n\n<b>Tel raqami:</b>\n71-236-30-40(236-00-23)`,
  41.3030661953467,
  69.28198194876636,
  "Toshkent shahri filliali malumotlari"
);
// Nukus
infoMap(
  "Nukus",
  `\n\n<b>Filial raxbari:</b>\nАчилов Азамат Турсинбаевич\n\n<b>Tel raqami:</b>\n☎️61 222-53-32(91 376-07-76)`,
  42.44197021610947,
  59.610176462295975,
  "Nukus shahri filliali malumotlari"
);
// Xorazm
infoMap(
  "Xorazm",
  `\n\n<b>Filial raxbari:</b>\nРамаданов Михаил Сергеевич\n\n<b>Tel raqami:</b>\n☎️62 224-12-35(91 376-07-76)`,
  41.54516978621329,
  60.61565861084039,
  "Xorazm shahri filliali malumotlari"
);
// Farg'ona
infoMap(
  "Farg'ona",
  `\n\n<b>Filial raxbari:</b>\nАтабаев Отабек Улуғбекович\n\n<b>Tel raqami:</b>\n☎️91 661-07-77(73 244-40-01 (05))`,
  41.54516978621329,
  60.61565861084039,
  "Farg'ona shahri filliali malumotlari"
);

// ru Андижан
infoMap(
  "Андижан",
  `\n\n<b>Руководитель филиала:</b>\nСаттаров Гавхар Адилович\n\n<b>Телефонный номер:</b>\n☎️95 202-33-55 (+998 90 571 47 77)`,
  41.37255691958309,
  69.288790291014,
  "Информация Андижанского филиала"
);
// Бухара
infoMap(
  "Бухара",
  `\n\n<b>Руководитель филиала:</b>\nХамдамов Анвар Нормуродович\n\n<b>Телефонный номер:</b>\n☎️65 226-56-99 (93 686-11-78)`,
  39.764434871119164,
  64.40835581349384,
  "Информация Бухарского филиала"
);
// Жиззах
infoMap(
  "Жиззах",
  `\n\n<b>Руководитель филиала:</b>\nАбдусаидов Сунатулло Хусанович\n\n<b>Телефонный номер:</b>\n☎️72 226-91-87(93 992-95-59)`,
  40.11309002699019,
  67.83306872883537,
  "Информация Джизакского филиала"
);
// Кашкадаря
infoMap(
  "Кашкадаря",
  `\n\n<b>Руководитель филиала:</b>\nРахимов Тожиддин Уралович\n\n<b>Телефонный номер:</b>\n75 224-05-25(+998 98 777 34 37)`,
  38.83258775290569,
  65.80790130528706,
  "Информация Кашкадарьинского филиала"
);
// Наваи
infoMap(
  "Наваи",
  `\n\n<b>Руководитель филиала:</b>\nРажабов Қахрамон Разақович\n\n<b>Телефонный номер:</b>\n☎️79 224-11-60(98 778-10-17)`,
  40.10912240280854,
  65.36061781349385,
  "Информация Навоийского филиала"
);
// Наманган
infoMap(
  "Наманган",
  `\n\n<b>Руководитель филиала:</b>\nАпаков Муҳаммадаюбхон\n\n<b>Телефонный номер:</b>\n☎️69 227-94-64(90 554-22-20)`,
  20.758670941406404,
  -0.000005728835389003358,
  "Информация о Наманганском филиале"
);
// Самарканд
infoMap(
  "Самарканд",
  `\n\n<b>Руководитель филиала:</b>\nНормуратов Умид Мухтарович\n\n<b>Телефонный номер:</b>\n☎️66 233-24-00(99 320-62-12)`,
  39.65524940525757,
  66.9665332711646,
  "Информация Самаркандского филиала"
);
// Сурхандаря
infoMap(
  "Сурхандаря",
  `\n\n<b>Руководитель филиала:</b>\nХамраев Рустам Усманович\n\n<b>Телефонный номер:</b>\n☎️76 222-45-22(99 715-10-05)`,
  37.22043226460796,
  67.27771881349382,
  "Информация Сурхандарьинского филиала"
);
// Сирдаря
infoMap(
  "Сирдаря",
  `\n\n<b>Руководитель филиала:</b>\nИсроилов Сирожиддин Мамарахимович\n\n<b>Телефонный номер:</b>\n☎️67 225-55-59(94 407-18-07)`,
  40.497166345408885,
  68.77635181349383,
  "Информация о Сырдарьинском филиале"
);
// Ташкентская область
infoMap(
  "Ташкентская область",
  `\n\n<b>Руководитель филиала:</b>\nБахромов Нодир Қодирбек ўғли\n\n<b>Телефонный номер:</b>\n+998 99 999 96 99`,
  41.064729854845915,
  69.34362918650616,
  "Информация Ташкентского областного филиала"
);
// город Ташкент
infoMap(
  "город Ташкент",
  `\n\n<b>Руководитель филиала:</b>\nТешабаев Улуғбек Юлдашевич\n\n<b>Телефонный номер:</b>\n71-236-30-40(236-00-23)`,
  41.3030661953467,
  69.28198194876636,
  "Информация Ташкентского городского филиала"
);
// Нукус
infoMap(
  "Нукус",
  `\n\n<b>Руководитель филиала:</b>\nАчилов Азамат Турсинбаевич\n\n<b>Телефонный номер:</b>\n☎️61 222-53-32(91 376-07-76)`,
  42.44197021610947,
  59.610176462295975,
  "Информация Нукусского городского филиала"
);
// Хоразм
infoMap(
  "Хоразм",
  `\n\n<b>Руководитель филиала:</b>\nРамаданов Михаил Сергеевич\n\n<b>Телефонный номер:</b>\n☎️62 224-12-35(91 376-07-76)`,
  41.54516978621329,
  60.61565861084039,
  "Информация Хорезмского городского филиала"
);
// Фергана
infoMap(
  "Фергана",
  `\n\n<b>Руководитель филиала:</b>\nАтабаев Отабек Улуғбекович\n\n<b>Телефонный номер:</b>\n☎️91 661-07-77(73 244-40-01 (05))`,
  41.54516978621329,
  60.61565861084039,
  "Информация Ферганского городского филиала"
);

// Elchixona
function elchi(btn, lat, lan, text) {
  bot.action(btn, async (ctx) => {
    try {
      await telegram.sendLocation(ctx.chat.id, lat, lan);
      await ctx.replyWithHTML(`${text}`);
    } catch (error) {
      console.error(error);
    }
  });
}
// Бирлашган Араб Амирликларидаги элчихона
elchi(
  "btn_us_33",
  24.444278994513944,
  54.41455238211567,
  "Бирлашган Араб Амирликларидаги элчихона манзили!"
);
// Туркиядаги элчихона
elchi(
  "btn_us_34",
  39.87248206619246,
  32.86392204571917,
  "Туркиядаги элчихона манзили!"
);
// Афинадаги элчихона
elchi(
  "btn_us_35",
  38.013377420350444,
  23.7704333438151,
  "Афинадаги элчихона манзили!"
);
// Туркманистондаги элчихона
elchi(
  "btn_us_36",
  37.944395783753,
  58.35945449723727,
  "Туркманистондаги элчихона манзили!"
);
// Азарбайжондаги элчихона
elchi(
  "btn_us_37",
  40.35129867707628,
  49.804822174569225,
  "Азарбайжондаги элчихона манзили!"
);
// Германиядаги элчихона
elchi(
  "btn_us_38",
  52.53476699810613,
  13.355841434503855,
  "Германиядаги элчихона манзили!"
);
// Қирғизистондаги элчихона
elchi(
  "btn_us_39",
  42.83321853615102,
  74.58426898019441,
  "Қирғизистондаги элчихона манзили!"
);
// Бельгиядаги элчихона
elchi(
  "btn_us_40",
  50.80305823116729,
  4.3881604958097,
  "Бельгиядаги элчихона манзили!"
);
// Полшадаги элчихона
elchi(
  "btn_us_41",
  52.150767691925665,
  21.024463453530476,
  "Полшадаги элчихона манзили!"
);
// АҚШдаги элчихона
elchi(
  "btn_us_42",
  38.90852735256902,
  -77.0395766934884,
  "АҚШдаги элчихона манзили!"
);
// Австрядаги элчихона
elchi(
  "btn_us_43",
  48.24042034387942,
  16.312963926402904,
  "Австрядаги элчихона манзили!"
);
// Ҳиндистондаги элчихона
elchi(
  "btn_us_44",
  28.590722793936884,
  77.17780408535243,
  "Ҳиндистондаги элчихона манзили!"
);
// Екатеринбургдаги элчихона
elchi(
  "btn_us_45",
  56.84120430965575,
  60.61265568809314,
  "Екатеринбургдаги элчихона манзили!"
);
// Индонезиядаги элчихона
elchi(
  "btn_us_46",
  -6.236378323295416,
  106.80503028134149,
  "Индонезиядаги элчихона манзили!"
);
// Покистондаги элчихона
elchi(
  "btn_us_47",
  33.71875988797603,
  73.03812025664149,
  "Покистондаги элчихона манзили!"
);
// Украинадаги элчихона
elchi(
  "btn_us_48",
  50.454925295726774,
  30.516991797646273,
  "Украинадаги элчихона манзили!"
);
// Малайзиядаги элчихона
elchi(
  "btn_us_49",
  3.1544418360886914,
  101.75415867153502,
  "Малайзиядаги элчихона манзили!"
);
// Буюк Британиядаги элчихона
elchi(
  "btn_us_50",
  51.50664268170274,
  -0.20515924409555078,
  "Буюк Британиядаги элчихона манзили!"
);
// Миср элчихонаси
elchi(
  "btn_us_51",
  30.042451025212017,
  31.214712055259547,
  "Миср элчихона манзили!"
);
// Афғонистондаги элчихона
elchi(
  "btn_us_52",
  34.53979727628865,
  69.1826342323586,
  "Афғонистондаги элчихона манзили!"
);
// Саудиа Арабистони Подшоҳлигидаги элчихона
elchi(
  "btn_us_53",
  24.708759276381418,
  46.70206392630878,
  "Саудиа Арабистони Подшоҳлигидаги элчихона манзили!"
);
// Қувайтдаги элчихона
elchi(
  "btn_us_54",
  29.2869839459442,
  48.072332168735,
  "Қувайтдаги элчихона манзили!"
);
// Япониядаги элчихона
elchi(
  "btn_us_55",
  35.639651217065186,
  139.73707066889529,
  "Япониядаги элчихона манзили!"
);
// Эрондаги элчихона
elchi(
  "btn_us_56",
  35.804237034744176,
  51.475708497735454,
  "Эрондаги элчихона манзили!"
);
// Исроилдаги элчихона
elchi(
  "btn_us_57",
  32.08754611599336,
  34.81746869763784,
  "Исроилдаги элчихона манзили!"
);
// Цингапурдаги элчихона
elchi(
  "btn_us_58",
  1.3009625881565763,
  103.84276539722717,
  "Цингапурдаги элчихона манзили!"
);
// Кореядаги элчихона
elchi(
  "btn_us_59",
  37.53488972591446,
  127.00167499778397,
  "Кореядаги элчихона манзили!"
);
// Италиядаги элчихона
elchi(
  "btn_us_60",
  41.909750408926016,
  12.470312340244002,
  "Италиядаги элчихона манзили!"
);
// Хитойдаги элчихона
elchi(
  "btn_us_61",
  39.94287144608594,
  116.45153499785474,
  "Хитойдаги элчихона манзили!"
);
// Франциядаги элчихона
elchi(
  "btn_us_62",
  48.8710347216855,
  2.3200317251341303,
  "Франциядаги элчихона манзили!"
);
// Қозоғистондаги элчихона
elchi(
  "btn_us_63",
  43.26024871891677,
  76.96371816940604,
  "Қозоғистондаги элчихона манзили!"
);
// Россиядаги элчихона
elchi(
  "btn_us_64",
  55.73268098285613,
  37.62100169840296,
  "Россиядаги элчихона манзили!"
);
// Беларусдаги элчихона
elchi(
  "btn_us_65",
  53.939271184180775,
  27.49223602716975,
  "Беларусдаги элчихона манзили!"
);
// Уммондаги Элчихона
elchi(
  "btn_us_66",
  23.60739726203906,
  58.44959846861621,
  "Уммондаги элчихона манзили!"
);
// Испаниядаги элчихона
elchi(
  "btn_us_67",
  40.435752362402454,
  -3.6897059598015853,
  "Испаниядаги элчихона манзили!"
);
//ru Посольство
// Посольство в Объединенных Арабских Эмиратах
elchi(
  "btn_ru_33",
  24.444278994513944,
  54.41455238211567,
  "Посольство в Объединенных Арабских Эмиратах!"
);
// Посольство в Турции
elchi(
  "btn_ru_34",
  39.87248206619246,
  32.86392204571917,
  "Посольство в Турции!"
);
// Посольство в Афинах
elchi(
  "btn_ru_35",
  38.013377420350444,
  23.7704333438151,
  "Посольство в Афинах!"
);
// Посольство в Туркменистане
elchi(
  "btn_ru_36",
  37.944395783753,
  58.35945449723727,
  "Посольство в Туркменистане!"
);
// Посольство в Азербайджане
elchi(
  "btn_ru_37",
  40.35129867707628,
  49.804822174569225,
  "Посольство в Азербайджане!"
);
// Посольство в Германии
elchi(
  "btn_ru_38",
  52.53476699810613,
  13.355841434503855,
  "Посольство в Германии!"
);
// Посольство в Кыргызстане
elchi(
  "btn_ru_39",
  42.83321853615102,
  74.58426898019441,
  "Посольство в Кыргызстане!"
);
// Посольство в Бельгии
elchi("btn_ru_40", 50.80305823116729, 4.3881604958097, "Посольство в Бельгии!");
// Посольство в Польше
elchi(
  "btn_ru_41",
  52.150767691925665,
  21.024463453530476,
  "Посольство в Польше!"
);
// Посольство в США
elchi("btn_ru_42", 38.90852735256902, -77.0395766934884, "Посольство в США!");
// Посольство в Австрии
elchi(
  "btn_ru_43",
  48.24042034387942,
  16.312963926402904,
  "Посольство в Австрии!"
);
// Посольство в Индии
elchi(
  "btn_ru_44",
  28.590722793936884,
  77.17780408535243,
  "Посольство в Индии!"
);
// Екатеринбургдаги элчихона
elchi(
  "btn_ru_45",
  56.84120430965575,
  60.61265568809314,
  "Посольство в Екатеринбурге адрес!"
);
// Адрес посольства в Индонезии
elchi(
  "btn_ru_46",
  -6.236378323295416,
  106.80503028134149,
  "Адрес посольства в Индонезии!"
);
// Адрес посольства в Пакистане
elchi(
  "btn_ru_47",
  33.71875988797603,
  73.03812025664149,
  "Адрес посольства в Пакистане!"
);
// Адрес Посольства в Украине
elchi(
  "btn_ru_48",
  50.454925295726774,
  30.516991797646273,
  "Адрес Посольства в Украине!"
);
// Адрес посольства в Малайзии
elchi(
  "btn_ru_49",
  3.1544418360886914,
  101.75415867153502,
  "Адрес посольства в Малайзии!"
);
// Адрес посольства в Великобритании
elchi(
  "btn_ru_50",
  51.50664268170274,
  -0.20515924409555078,
  "Адрес посольства в Великобритании!"
);
// Адрес посольства Египта
elchi(
  "btn_ru_51",
  30.042451025212017,
  31.214712055259547,
  "Адрес посольства Египта!"
);
// Адрес посольства в Афганистане
elchi(
  "btn_ru_52",
  34.53979727628865,
  69.1826342323586,
  "Адрес посольства в Афганистане!"
);
// Адрес посольства в Королевстве Саудовская Аравия
elchi(
  "btn_ru_53",
  24.708759276381418,
  46.70206392630878,
  "Адрес посольства в Королевстве Саудовская Аравия!"
);
// Адрес посольства в Кувейте
elchi(
  "btn_ru_54",
  29.2869839459442,
  48.072332168735,
  "Адрес посольства в Кувейте!"
);
// Адрес посольства в Японии
elchi(
  "btn_ru_55",
  35.639651217065186,
  139.73707066889529,
  "Адрес посольства в Японии!"
);
// Адрес посольства в Иране
elchi(
  "btn_ru_56",
  35.804237034744176,
  51.475708497735454,
  "Адрес посольства в Иране!"
);
// Адрес посольства в Израиле
elchi(
  "btn_ru_57",
  32.08754611599336,
  34.81746869763784,
  "Адрес посольства в Израиле!"
);
// Адрес посольства в Сингапуре
elchi(
  "btn_ru_58",
  1.3009625881565763,
  103.84276539722717,
  "Адрес посольства в Сингапуре!"
);
// Адрес посольства в Корее
elchi(
  "btn_ru_59",
  37.53488972591446,
  127.00167499778397,
  "Адрес посольства в Корее!"
);
// Адрес посольства в Италии
elchi(
  "btn_ru_60",
  41.909750408926016,
  12.470312340244002,
  "Адрес посольства в Италии!"
);
// Адрес посольства в Китае
elchi(
  "btn_ru_61",
  39.94287144608594,
  116.45153499785474,
  "Адрес посольства в Китае!"
);
// Адрес посольства во Франции
elchi(
  "btn_ru_62",
  48.8710347216855,
  2.3200317251341303,
  "Адрес посольства во Франции!"
);
// Адрес посольства в Казахстане
elchi(
  "btn_ru_63",
  43.26024871891677,
  76.96371816940604,
  "Адрес посольства в Казахстане!"
);
// Адрес посольства в России
elchi(
  "btn_ru_64",
  55.73268098285613,
  37.62100169840296,
  "Адрес посольства в России!"
);
// Адрес посольства в Беларуси
elchi(
  "btn_ru_65",
  53.939271184180775,
  27.49223602716975,
  "Адрес посольства в Беларуси!"
);
// Адрес посольства в Омане
elchi(
  "btn_ru_66",
  23.60739726203906,
  58.44959846861621,
  "Адрес посольства в Омане!"
);
// Испаниядаги элчихона
elchi(
  "btn_ru_67",
  40.435752362402454,
  -3.6897059598015853,
  "Адрес посольства в Испании!"
);

// Konsulliklar
function consul(btn, lat, lan, text) {
  bot.action(btn, async (ctx) => {
    try {
      await telegram.sendLocation(ctx.chat.id, lat, lan);
      await ctx.replyWithHTML(`${text}`);
    } catch (error) {
      console.error(error);
    }
  });
}
// Бангконгдаги бош консулхона
consul(
  "btn_us_68",
  13.740640582578711,
  100.54819330838903,
  "Бангконгдаги бош консулхона manzili"
);
// Дубайдаги бош консулхона
consul(
  "btn_us_69",
  25.256565968013557,
  55.31072743740501,
  "Дубайдаги бош консулхона manzili"
);
// Жиддадаги бош консулхона
consul(
  "btn_us_70",
  21.629955765961473,
  39.13860510850161,
  "Жиддадаги бош консулхона manzili"
);
// Истамбулдаги бош консулхона
consul(
  "btn_us_71",
  41.077548907195606,
  29.01750403226283,
  "Истамбулдаги бош консулхона manzili"
);
// Қозондаги бош консулхона
consul(
  "btn_us_72",
  55.77867786648602,
  49.129856098404744,
  "Қозондаги бош консулхона manzili"
);
// Шанхайдаги бош консулхона
consul(
  "btn_us_73",
  31.249190567604174,
  121.49042699761723,
  "Шанхайдаги бош консулхона manzili"
);
// Франкфуртдаги бош консулхона
consul(
  "btn_us_74",
  50.118872801900075,
  8.68858553867173,
  "Франкфуртдаги бош консулхона manzili"
);
// Санкт-Петурбургдаги бош консулхона
consul(
  "btn_us_75",
  50.118872801900075,
  8.68858553867173,
  "Санкт-Петурбургдаги бош консулхона manzili"
);
// Ростовдаги бош консулхона
consul(
  "btn_us_76",
  47.22460597916381,
  39.72292899833528,
  "Ростовдаги бош консулхона manzili"
);
// Олмаотадаги бош консулхона
consul(
  "btn_us_77",
  43.20374275346765,
  76.91203171144947,
  "Олмаотадаги бош консулхона manzili"
);
// Нью-Йоркдаги бош консулхона
consul(
  "btn_us_78",
  40.750038871007376,
  -73.97542285979196,
  "Нью-Йоркдаги бош консулхона manzili"
);
// Новосибирскдаги бош консулхона
consul(
  "btn_us_79",
  55.039794292743586,
  82.93584886954052,
  "Новосибирскдаги бош консулхона manzili"
);
// Консульства
// Адрес Генерального консульства в Бангкоке
consul(
  "btn_ru_68",
  13.740640582578711,
  100.54819330838903,
  "Адрес Генерального консульства в Бангкоке"
);
// Адрес Генерального консульства в Дубае
consul(
  "btn_ru_69",
  25.256565968013557,
  55.31072743740501,
  "Адрес Генерального консульства в Дубае"
);
// Адрес Генерального консульства в Джидде
consul(
  "btn_ru_70",
  21.629955765961473,
  39.13860510850161,
  "Адрес Генерального консульства в Джидде"
);
// Адрес Генерального консульства в Стамбуле
consul(
  "btn_ru_71",
  41.077548907195606,
  29.01750403226283,
  "Адрес Генерального консульства в Стамбуле"
);
// Адрес Генерального консульства в Казани
consul(
  "btn_ru_72",
  55.77867786648602,
  49.129856098404744,
  "Адрес Генерального консульства в Казани"
);
// Адрес Генерального консульства в Шанхае
consul(
  "btn_ru_73",
  31.249190567604174,
  121.49042699761723,
  "Адрес Генерального консульства в Шанхае"
);
// Адрес Генерального консульства во Франкфурте
consul(
  "btn_ru_74",
  50.118872801900075,
  8.68858553867173,
  "Адрес Генерального консульства во Франкфурте"
);
// Адрес Генерального консульства в Санкт-Петербурге
consul(
  "btn_ru_75",
  50.118872801900075,
  8.68858553867173,
  "Адрес Генерального консульства в Санкт-Петербурге"
);
// Адрес Генерального консульства в Ростове
consul(
  "btn_ru_76",
  47.22460597916381,
  39.72292899833528,
  "Адрес Генерального консульства в Ростове"
);
// Адрес Генерального консульства в Алматы
consul(
  "btn_ru_77",
  43.20374275346765,
  76.91203171144947,
  "Адрес Генерального консульства в Алматы"
);

// Адрес Генерального консульства в Нью-Йорке
consul(
  "btn_ru_78",
  40.750038871007376,
  -73.97542285979196,
  "Адрес Генерального консульства в Нью-Йорке"
);

// Адрес Генерального консульства в Новосибирске
consul(
  "btn_ru_79",
  55.039794292743586,
  82.93584886954052,
  "Адрес Генерального консульства в Новосибирске"
);

// Россия Федерацияси
bot.hears("Россия Федерацияси", async (ctx) => {
  try {
    await ctx.reply(
      "Россия Федерацияси",
      Markup.keyboard([
        [
          Markup.button.callback("Москва шаҳри", "btn_us_25"),
          Markup.button.callback("Санкт-Петербург шаҳри", "btn_us_26"),
        ],
        [
          Markup.button.callback("Екатеринбург шаҳри", "btn_us_27"),
          Markup.button.callback("Новосибирск шаҳри", "btn_us_28"),
        ],
        [
          Markup.button.callback("Самара шаҳри", "btn_us_29"),
          Markup.button.callback("Уфа шаҳри", "btn_us_30"),
        ],
        [
          Markup.button.callback("⚙️ Sozlash", "btn_us_7"),
          Markup.button.callback("💼 Bosh ish orinlari", "btn_ru_29-1"),
        ],
      ])
        .oneTime()
        .resize()
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

// Россия Федерацияси
bot.hears("Российская Федерация", async (ctx) => {
  try {
    await ctx.reply(
      "Российская Федерация",
      Markup.keyboard([
        [
          Markup.button.callback("Москва", "btn_ru_25"),
          Markup.button.callback("Санкт-Петербург", "btn_ru_26"),
        ],
        [
          Markup.button.callback("Екатеринбург", "btn_ru_27"),
          Markup.button.callback("Новосибирск", "btn_ru_28"),
        ],
        [
          Markup.button.callback("Самара", "btn_ru_29"),
          Markup.button.callback("Уфа", "btn_ru_30"),
        ],
        [
          Markup.button.callback("💼 Ваканция", "btn_ru_29-1"),
          Markup.button.callback("⚙️ Sozlash", "btn_us_7"),
        ],
      ])
        .oneTime()
        .resize()
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

bot.hears("💼 Ваканция", async (ctx)=>{
  try {
    await ctx.replyWithHTML(
      `<b>Грузчик</b>
      
      Необходимое количество работников: 
      100 человек 
      
      Основные обязанности
      <i>Деятельность вспомогательная прочая, связанная с перевозками, деятельность по складированию и хранению. </i>
      
      <b>Адрес</b>
      <i>Московская область, Красногорский район, п/о Архангельское, улица 4 км. Ильинского шоссе, строение 8, офис 514. </i>
      
      <b>Телефон: </b>
      +7 916 220 60 01
      <b>Руководитель организации:</b> 
      Генеральный директор Николаев П.С.
      
      <b>График работы дни/щсы: </b>
      <i>2 день/2 ночь/2 выходных; 3 день/3 ночь/3 выходных·  5 рабочих/2 выходных; 6 рабочих/1 выходной; </i>
      
      <b>Уровень з/п: </b>
      От 50 тыс.руб./мес., пропорционально выполненному объему работ.
      
      <b>Пол, возраст, семейное положение: </b> 
      Мужчины 18-45 лет, семейное положение не имеет значения.
      
      ` 
    );
    await ctx.replyWithHTML(
      `<b>Специалист по сборке света-прозрачных конструкций и стекло пакетов </b>
      
      Необходимое количество работников: 
      31 (1 человек - повар)
      
      Основные обязанности
      <i>оператор производственной линии на автоматизированном оборудовании  </i>
      
      <b>Адрес</b>
      <i>153027, г. Иваново, ул. Павла Большевикова, д. 27, корпус 3 </i>
      
      <b>Телефон: </b>
      8-905- 157-5206
      <b>Руководитель организации:</b> 
      Котов Евгений Александрович, директор
      
      <b>График работы дни/щсы: </b>
      <i>сменный, полная Занятость </i>
      
      <b>Уровень з/п: </b>
      От 35 ООО р (зависит от стажа, производственных показателей выработки и качества) 
      
      <b>Пол, возраст, семейное положение: </b> 
      Мужчины от 25 до 45 лет, семейное положение не имеет значения.
      ` 
    );
    await ctx.replyWithHTML(
      `<b>Маляр </b>
      
      Необходимое количество работников: 
      20 человек
      
      Основные обязанности
      <i>Подготовка поверхности под покрасочные работы, штукатурка по маякам, сплошное выравнивание стен, шпаклевка и покраска стен, устройство каркасов из профиля под обшивку гипсокартонным ли влагостойким (ГКЛВ).   </i>
      
      <b>Адрес</b>
      <i>119361, г. Москва, ул. Озёрная, 42, пом. 42</i>
      
      <b>Телефон: </b>
      +7 915 482 39 65
      <b>Руководитель организации:</b> 
      Бочков Денис Александрович, директор
      
      <b>График работы дни/щсы: </b>
      <i>5/2, с 9.00 до 18.00 (плавающие выходные) </i>
      
      <b>Уровень з/п: </b>
      От 50 до 70 тыс. руб. 
      
      <b>Пол, возраст, семейное положение: </b> 
      Мужчины 18-45 лет, семейное положение не имеет значения 
      ` 
    );
    await ctx.replyWithHTML(
      `<b>Овощевод </b>
      
      Необходимое количество работников: 
      50 человек
      
      Основные обязанности
      <i>Работа в теплице. Выполнение следующих видов работ: сбор урожая, уходные работы за саженцами, посадка саженцев, уборка после сбора урожая, комплектация овощей, сортировка, срыв листа, верховые работы, формирование и тд. Сбор/Уход 10 месяцев, Ликвидация 2 месяца </i>
      
      <b>Адрес</b>
      <i>Москва, ул. Верейская 29 строение 134</i>
      
      <b>Телефон: </b>
      8-495-109-24-14
      <b>Руководитель организации:</b> 
      Генеральный директор - Муминов Т.Р.
      
      <b>График работы дни/щсы: </b>
      <i>Сменный график работы с 8:00 до 20:00, 6/1.  
      1 смена с 8:00 до 16:00 
      2 смена с 12:00 до 20:00. 
      Обед – 30 минут, технические перерывы – 15 минут + 15 минут (время варьируется в зависимости от теплицы) </i>
      
      <b>Уровень з/п: </b>
      Средний доход в месяц при выполнении 100%-ой нормы выработки – 150р/час. Первые две недели фиксированная заработная плата 1300 рублей, если соискатель выполняет больший объем работы, то получает соответствующую сумму вознаграждения (к примеру 1580 рублей) 
      
      <b>Пол, возраст, семейное положение: </b> 
      Мужчины и женщины в возрасте от 21 до 45 лет
      ` 
    );
    await ctx.replyWithHTML(
      `<b>Овощевод </b>
      
      Необходимое количество работников: 
      50 человек
      
      Основные обязанности
      <i>Работа в теплице. Выполнение следующих видов работ: сбор урожая, уходные работы за саженцами, посадка саженцев, уборка после сбора урожая, комплектация овощей, сортировка, срыв листа, верховые работы, формирование и тд. Сбор/Уход 10 месяцев, Ликвидация 2 месяца </i>
      
      <b>Адрес</b>
      <i>Москва, ул. Верейская 29 строение 134</i>
      
      <b>Телефон: </b>
      8-495-109-24-14
      <b>Руководитель организации:</b> 
      Генеральный директор - Муминов Т.Р.
      
      <b>График работы дни/щсы: </b>
      <i>Сменный график работы с 8:00 до 20:00, 6/1.  
      1 смена с 8:00 до 16:00 
      2 смена с 12:00 до 20:00. 
      Обед – 30 минут, технические перерывы – 15 минут + 15 минут (время варьируется в зависимости от теплицы) </i>
      
      <b>Уровень з/п: </b>
      Средний доход в месяц при выполнении 100%-ой нормы выработки – 150р/час. Первые две недели фиксированная заработная плата 1300 рублей, если соискатель выполняет больший объем работы, то получает соответствующую сумму вознаграждения (к примеру 1580 рублей) 
      
      <b>Пол, возраст, семейное положение: </b> 
      Мужчины и женщины в возрасте от 21 до 45 лет
      ` 
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
})
bot.hears("💼 Bosh ish orinlari", async (ctx)=>{
  try {
    await ctx.replyWithHTML(
      `<b>Грузчик</b>
      
      Необходимое количество работников: 
      100 человек 
      
      Основные обязанности
      <i>Деятельность вспомогательная прочая, связанная с перевозками, деятельность по складированию и хранению. </i>
      
      <b>Адрес</b>
      <i>Московская область, Красногорский район, п/о Архангельское, улица 4 км. Ильинского шоссе, строение 8, офис 514. </i>
      
      <b>Телефон: </b>
      +7 916 220 60 01
      <b>Руководитель организации:</b> 
      Генеральный директор Николаев П.С.
      
      <b>График работы дни/щсы: </b>
      <i>2 день/2 ночь/2 выходных; 3 день/3 ночь/3 выходных·  5 рабочих/2 выходных; 6 рабочих/1 выходной; </i>
      
      <b>Уровень з/п: </b>
      От 50 тыс.руб./мес., пропорционально выполненному объему работ.
      
      <b>Пол, возраст, семейное положение: </b> 
      Мужчины 18-45 лет, семейное положение не имеет значения.
      
      ` 
    );
    await ctx.replyWithHTML(
      `<b>Специалист по сборке света-прозрачных конструкций и стекло пакетов </b>
      
      Необходимое количество работников: 
      31 (1 человек - повар)
      
      Основные обязанности
      <i>оператор производственной линии на автоматизированном оборудовании  </i>
      
      <b>Адрес</b>
      <i>153027, г. Иваново, ул. Павла Большевикова, д. 27, корпус 3 </i>
      
      <b>Телефон: </b>
      8-905- 157-5206
      <b>Руководитель организации:</b> 
      Котов Евгений Александрович, директор
      
      <b>График работы дни/щсы: </b>
      <i>сменный, полная Занятость </i>
      
      <b>Уровень з/п: </b>
      От 35 ООО р (зависит от стажа, производственных показателей выработки и качества) 
      
      <b>Пол, возраст, семейное положение: </b> 
      Мужчины от 25 до 45 лет, семейное положение не имеет значения.
      ` 
    );
    await ctx.replyWithHTML(
      `<b>Маляр </b>
      
      Необходимое количество работников: 
      20 человек
      
      Основные обязанности
      <i>Подготовка поверхности под покрасочные работы, штукатурка по маякам, сплошное выравнивание стен, шпаклевка и покраска стен, устройство каркасов из профиля под обшивку гипсокартонным ли влагостойким (ГКЛВ).   </i>
      
      <b>Адрес</b>
      <i>119361, г. Москва, ул. Озёрная, 42, пом. 42</i>
      
      <b>Телефон: </b>
      +7 915 482 39 65
      <b>Руководитель организации:</b> 
      Бочков Денис Александрович, директор
      
      <b>График работы дни/щсы: </b>
      <i>5/2, с 9.00 до 18.00 (плавающие выходные) </i>
      
      <b>Уровень з/п: </b>
      От 50 до 70 тыс. руб. 
      
      <b>Пол, возраст, семейное положение: </b> 
      Мужчины 18-45 лет, семейное положение не имеет значения 
      ` 
    );
    await ctx.replyWithHTML(
      `<b>Овощевод </b>
      
      Необходимое количество работников: 
      50 человек
      
      Основные обязанности
      <i>Работа в теплице. Выполнение следующих видов работ: сбор урожая, уходные работы за саженцами, посадка саженцев, уборка после сбора урожая, комплектация овощей, сортировка, срыв листа, верховые работы, формирование и тд. Сбор/Уход 10 месяцев, Ликвидация 2 месяца </i>
      
      <b>Адрес</b>
      <i>Москва, ул. Верейская 29 строение 134</i>
      
      <b>Телефон: </b>
      8-495-109-24-14
      <b>Руководитель организации:</b> 
      Генеральный директор - Муминов Т.Р.
      
      <b>График работы дни/щсы: </b>
      <i>Сменный график работы с 8:00 до 20:00, 6/1.  
      1 смена с 8:00 до 16:00 
      2 смена с 12:00 до 20:00. 
      Обед – 30 минут, технические перерывы – 15 минут + 15 минут (время варьируется в зависимости от теплицы) </i>
      
      <b>Уровень з/п: </b>
      Средний доход в месяц при выполнении 100%-ой нормы выработки – 150р/час. Первые две недели фиксированная заработная плата 1300 рублей, если соискатель выполняет больший объем работы, то получает соответствующую сумму вознаграждения (к примеру 1580 рублей) 
      
      <b>Пол, возраст, семейное положение: </b> 
      Мужчины и женщины в возрасте от 21 до 45 лет
      ` 
    );
    await ctx.replyWithHTML(
      `<b>Овощевод </b>
      
      Необходимое количество работников: 
      50 человек
      
      Основные обязанности
      <i>Работа в теплице. Выполнение следующих видов работ: сбор урожая, уходные работы за саженцами, посадка саженцев, уборка после сбора урожая, комплектация овощей, сортировка, срыв листа, верховые работы, формирование и тд. Сбор/Уход 10 месяцев, Ликвидация 2 месяца </i>
      
      <b>Адрес</b>
      <i>Москва, ул. Верейская 29 строение 134</i>
      
      <b>Телефон: </b>
      8-495-109-24-14
      <b>Руководитель организации:</b> 
      Генеральный директор - Муминов Т.Р.
      
      <b>График работы дни/щсы: </b>
      <i>Сменный график работы с 8:00 до 20:00, 6/1.  
      1 смена с 8:00 до 16:00 
      2 смена с 12:00 до 20:00. 
      Обед – 30 минут, технические перерывы – 15 минут + 15 минут (время варьируется в зависимости от теплицы) </i>
      
      <b>Уровень з/п: </b>
      Средний доход в месяц при выполнении 100%-ой нормы выработки – 150р/час. Первые две недели фиксированная заработная плата 1300 рублей, если соискатель выполняет больший объем работы, то получает соответствующую сумму вознаграждения (к примеру 1580 рублей) 
      
      <b>Пол, возраст, семейное положение: </b> 
      Мужчины и женщины в возрасте от 21 до 45 лет
      ` 
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
})
// Корея Республикаси
bot.hears("Корея Республикаси", async (ctx)=>{
  try {
    await ctx.reply(
      "Корея Республикаси",
      Markup.keyboard([
        [
          Markup.button.callback("Квангжу шаҳри", "btn_us_31"), 
          Markup.button.callback("⚙️ Sozlash", "btn_ru_7"),
        ]
      ]) .oneTime()
      .resize()
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
})
// Республика Корея
bot.hears("Республика Корея", async (ctx)=>{
  try {
    await ctx.reply(
      "Республика Корея",
      Markup.keyboard([
        [
          Markup.button.callback("город Кванджу", "btn_ru_31"), 
          Markup.button.callback("⚙️ Настройка", "btn_ru_7"),
        ]
      ]) .oneTime()
      .resize()
    );
    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
})

elchiKorea('город Кванджу', 35.176364, 126.808108, 'Квансан-гу, Пунджон-ро в Кванджу, 145-82 Teл: +070-4252-2772')
elchiKorea('Квангжу шаҳри', 35.176364, 126.808108, 'Кванджу шаҳрида Гвангсан-гу, Пунгеонг-ро, 145-82 Teл: +070-4252-2772')

function elchiKorea(btn, lat, lan, text) {
  bot.hears(btn, async (ctx) => {
    try {
      await telegram.sendLocation(ctx.chat.id, lat, lan);
      await ctx.replyWithHTML(`${text}`);
    } catch (error) {
      console.error(error);
    }
  });
}










// Россия Федерацияси
function rossiya(btn, lat, lan, text) {
  bot.hears(btn, async (ctx) => {
    try {
      await telegram.sendLocation(ctx.chat.id, lat, lan);
      await ctx.replyWithHTML(`${text}`);
    } catch (error) {
      console.error(error);
    }
  });
}

// Москва шаҳри
rossiya(
  "Москва шаҳри",
  55.73481971124438,
  37.62056874267248,
  `📍Манзил: Москва шаҳри 1-Казачий тор кўчаси, 11/2 (Метро Полянка).
☎️ +7 (925) 045-47-44.`
);
// Санкт-Петербург
rossiya(
  "Санкт-Петербург шаҳри",
  59.91390068461683,
  30.315817660011795,
  `📍Манзил: Санкт-Петербург шаҳри, 4-Красноармейская кўчаси, 4А-уй\n Ўзбекистон Республикасининг Санкт-Петербург шаҳридаги Бош консулхонаси биноси.
☎️ +7 (951) 680-95-97.`
);
// Екатеринбург шаҳри
rossiya(
  "Екатеринбург шаҳри",
  59.913916819735704,
  30.315678185151736,
  `📍Манзил: Екатеринбург шаҳри, Карл Либкнехт кўчаси 22 уй.
☎️ +7 (925) 950-89-77, +7 (922) 186-35-66.`
);
// Новосибирск шаҳри
rossiya(
  "Новосибирск шаҳри",
  55.73484991418824,
  37.62050436966015,
  `📍Манзил: Новосибирск шаҳри, Ломоносова кўчаси, 55-уй.
☎️ +7 (953) 862-00-07.`
);
// Самара шаҳри
rossiya(
  "Самара шаҳри",
  53.20556605594967,
  50.126368184914405,
  `📍Манзил: Самара шаҳри, Ново-Садовая кўчаси, 3-уй.
☎️ +7 (917) 872-42-26.`
);
// Уфа шаҳри
rossiya(
  "Уфа шаҳри",
  54.72384807897076,
  55.94297372729565,
  `Манзил: Уфа шаҳри, Верхнеторговая майдони кўчаси, 4-уй, 516-офис.
☎️ +7 (917) 469-20-88, +7 (347) 216-33-43.`
);

// ru Москва
rossiya(
  "Москва",
  55.73481971124438,
  37.62056874267248,
  `📍Адрес: Москва, 1-я Казачья узкая улица, дом 11/2 (метро Полянка).
☎️ +7 (925) 045-47-44.`
);
// Санкт-Петербург
rossiya(
  "Санкт-Петербург",
  59.91390068461683,
  30.315817660011795,
  `📍Адрес: г. Санкт-Петербург, ул. Красноармейская, 4А, 4А, Генеральное консульство Республики Узбекистан в Санкт-Петербурге.
☎️ +7 (951) 680-95-97.`
);
// Екатеринбург
rossiya(
  "Екатеринбург",
  59.913916819735704,
  30.315678185151736,
  `📍Адрес: г. Екатеринбург, ул. Карла Либкнехта, 22.
☎️ +7 (925) 950-89-77, +7 (922) 186-35-66.`
);
// Новосибирск
rossiya(
  "Новосибирск",
  55.73484991418824,
  37.62050436966015,
  `📍Адрес: г. Новосибирск, улица Ломоносова, 55.
☎️ +7 (953) 862-00-07.`
);
// Самара
rossiya(
  "Самара",
  53.20556605594967,
  50.126368184914405,
  `📍Адрес: г. Самара, ул. Ново-Садовая, д. 3.
☎️ +7 (917) 872-42-26.`
);
// Уфа
rossiya(
  "Уфа",
  54.72384807897076,
  55.94297372729565,
  `📍Адрес: город Уфа, Верхнеторговая площадь, дом 4, офис 516.
☎️ +7 (917) 469-20-88, +7 (347) 216-33-43.`
);

bot.launch();
// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
