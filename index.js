const { Telegraf, Markup, Telegram } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const telegram = new Telegram(process.env.BOT_TOKEN);
bot.start(async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(
      ctx.chat.id,
      "Xush kelibsiz!\nДобропожаловать!",
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "🇺🇿 O`zbekcha", callback_data: "btn_us_0" },
              { text: "🇷🇺 Руский", callback_data: "btn_ru_0" },
            ],
          ],
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
});
// ru
bot.action("btn_ru_0", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇷🇺 Руский", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📍Адреса", callback_data: "btn_ru_1" },
            { text: "🗓Новости", url: "https://t.me/migratsiyaagentligi" },
          ],
          [
            {
              text: "📝 Оставить заявку",
              url: "http://www.migration.uz/application/create",
            },
            { text: "❗️ Для мигрантов", callback_data: "btn_ru_2" },
          ],
          [
            { text: "🏠 Главная страница", callback_data: "btn_ru_3" },
            { text: "⬅️ Назад", callback_data: "btn_ru_4" },
          ],
          [{ text: "🖥  Связаться", callback_data: "btn_ru_5" }],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// uz
bot.action("btn_us_0", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇺🇿 O`zbekcha", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📍Manzillar", callback_data: "btn_uz_1" },
            { text: "🗓 Yangiliklar", url: "https://t.me/migratsiyaagentligi" },
          ],
          [
            {
              text: "📝 Murojaat qoldirish",
              url: "http://www.migration.uz/application/create",
            },
            { text: "❗️ Mehnat migrantlari uchun", callback_data: "btn_uz_2" },
          ],
          [
            { text: "🏠 Bosh sahifa", callback_data: "btn_uz_3" },
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_4" },
          ],
          [{ text: "🖥  Bog`lanish", callback_data: "btn_uz_5" }],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Manzillar
bot.action("btn_uz_1", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇺🇿 O`zbekcha", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Hududiy filiallar", callback_data: "btn_uz_6" }],
          [
            {
              text: "ТММА нинг хориждаги Ваколатхоналари",
              callback_data: "btn_uz_7",
            },
          ],
          [
            { text: "Elchixonalar", callback_data: "btn_uz_8" },
            { text: "Bosh Konsulliklar", callback_data: "btn_uz_9" },
          ],
          [
            { text: "🏠 Bosh sahifa", callback_data: "btn_ru_3" },
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_11" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Адрес
bot.action("btn_ru_1", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇷🇺 Руский", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Региональные филиалы", callback_data: "btn_ru_6" }],
          [
            {
              text: "Представительства АВТМ за рубежом",
              callback_data: "btn_ru_7",
            },
          ],
          [{ text: "Посольства РУз за рубежом", callback_data: "btn_ru_8" }],
          [
            {
              text: "Генеральные консульства РУз за рубежом",
              callback_data: "btn_ru_9",
            },
          ],
          [
            { text: "🏠 Главная страница", callback_data: "btn_ru_3" },
            { text: "⬅️ Назад", callback_data: "btn_ru_11" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

// ТММА нинг хориждаги Ваколатхоналари
bot.action("btn_uz_7", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇺🇿 O`zbekcha", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Rossiya Federatsiyasi", callback_data: "btn_uz_31" },
            { text: "Koreya Respublikasi", callback_data: "btn_uz_32" },
          ],
          [
            { text: "Turkiya Respublikasi", callback_data: "btn_uz_39" },
            { text: "Qozog`iston Respublikasi", callback_data: "btn_uz_40" },
          ],
          [
            { text: "🏠 Bosh sahifa", callback_data: "btn_uz_3" },
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_27" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Представительства АВТМ за рубежом
bot.action("btn_ru_7", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇷🇺 Руский", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Российская Федерация", callback_data: "btn_ru_31" },
            { text: "Республика Корея", callback_data: "btn_ru_32" },
          ],
          [
            { text: "Республика Турция", callback_data: "btn_ru_39" },
            { text: "Республика Казахстан", callback_data: "btn_ru_40" },
          ],
          [
            { text: "🏠 Главная страница", callback_data: "btn_ru_3" },
            { text: "⬅️ Назад", callback_data: "btn_ru_27" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

// Rossiya Federatsiyasi
bot.action("btn_uz_31", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇺🇿 O`zbekcha", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Moskva shaxri", callback_data: "btn_uz_33" },
            { text: "Sankt-Peterburg shaxri ", callback_data: "btn_uz_34" },
          ],
          [
            { text: "Ekaterinburg shaxri", callback_data: "btn_uz_35" },
            { text: "Novosibirk shaxri ", callback_data: "btn_uz_36" },
          ],
          [
            { text: "Samara shaxri", callback_data: "btn_uz_37" },
            { text: "Ufa shaxri ", callback_data: "btn_uz_38" },
          ],
          [
            { text: "Tula viloyati", callback_data: "btn_uz_41" },
            { text: "Voronej viloyati", callback_data: "btn_uz_42" },
          ],
          [
            { text: "Volgograd viloyati", callback_data: "btn_uz_43" },
            { text: "Nijegorod viloyati", callback_data: "btn_uz_44" },
          ],
          [
            { text: "Xanti-Mansiysk avtonom okrugi-Yugra", callback_data: "btn_uz_45" },
            { text: "Irkutsk viloyati", callback_data: "btn_uz_46" },
          ],
          [
            { text: "Amur viloyati", callback_data: "btn_uz_47" },
            { text: "Krasnoyarsk o`lkasi", callback_data: "btn_uz_48" },
          ],
          [
            { text: "Perm o`lkasi", callback_data: "btn_uz_49" },
            { text: "Lipesk viloyati", callback_data: "btn_uz_50" },
          ],
          [
            { text: "Belgorod viloyati", callback_data: "btn_uz_51" },
            { text: "Stavropol viloyati", callback_data: "btn_uz_52" },
          ],
          [
            { text: "Astraxan viloyati", callback_data: "btn_uz_53" },
            { text: "Kostroma viloyati", callback_data: "btn_uz_54" },
          ],
          [
            { text: "Yamal-Nenesk avtonov okrugi", callback_data: "btn_uz_55" },
            { text: "Buratiya Respublikasi", callback_data: "btn_uz_56" },
          ],
          [
            { text: "Xabarovsk o`lkasi", callback_data: "btn_uz_57" },
            { text: "Kamerov viloyati", callback_data: "btn_uz_58" },
          ],
          [
            { text: "Udmurtiya Respublikasi", callback_data: "btn_uz_59" },
            { text: "Nijegorod viloyati", callback_data: "btn_uz_60" },
          ],
          [
            { text: "🏠 Bosh sahifa", callback_data: "btn_uz_3" },
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_7" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Rossiya Federatsiyasi
bot.action("btn_ru_31", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇷🇺 Руский", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Город Москва", callback_data: "btn_ru_33" },
            { text: "Город Санкт-Петербург ", callback_data: "btn_ru_34" },
          ],
          [
            { text: "Город Екатеринбург", callback_data: "btn_ru_35" },
            { text: "Город Новосибирск ", callback_data: "btn_ru_36" },
          ],
          [
            { text: "Город Самара", callback_data: "btn_ru_37" },
            { text: "Город Уфа ", callback_data: "btn_ru_38" },
          ],
          [
            { text: "Тульская область", callback_data: "btn_ru_41" },
            { text: "Воронежская область", callback_data: "btn_ru_42" },
          ],
          [
            { text: "Краснодарский край", callback_data: "btn_ru_43" },
            { text: "Волгоградская область ", callback_data: "btn_ru_44" },
          ],
          [
            { text: "Ханты-Мансийский автономный округ-Югра", callback_data: "btn_ru_45" },
            { text: "Иркутская область", callback_data: "btn_ru_46" },
          ],
          [
            { text: "Амурская область", callback_data: "btn_ru_47" },
            { text: "Красноярский край", callback_data: "btn_ru_48" },
          ],
          [
            { text: "Пермский край", callback_data: "btn_ru_49" },
            { text: "Липецкая область", callback_data: "btn_ru_50" },
          ],
          [
            { text: "Белгородская область", callback_data: "btn_ru_51" },
            { text: "Ставропольский край", callback_data: "btn_ru_52" },
          ],
          [
            { text: "Астраханекая область", callback_data: "btn_ru_53" },
            { text: "Костромская область", callback_data: "btn_ru_54" },
          ],
          [
            { text: "Ямало-Ненецкий автономный округ", callback_data: "btn_ru_55" },
            { text: "Республика Бурятия ", callback_data: "btn_ru_56" },
          ],
          [
            { text: "Хабаровский край", callback_data: "btn_ru_57" },
            { text: "Кемеровская область", callback_data: "btn_ru_58" },
          ],
          [
            { text: "Удмуртская Республика", callback_data: "btn_ru_59" },
            { text: "Нижегородская область", callback_data: "btn_ru_60" },
          ],
          [
            { text: "🏠 Главная страница", callback_data: "btn_ru_3" },
            { text: "⬅️ Назад", callback_data: "btn_ru_7" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

function rossiya(btn, type, lat, lan) {
  bot.action(btn, async (ctx) => {
    try {
      await ctx.deleteMessage();
      await bot.telegram.sendLocation(ctx.chat.id, lat, lan);
      await bot.telegram.sendMessage(ctx.chat.id, `${type}`, {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_31" },
              { text: "🏠 Bosh sahifa", callback_data: "btn_uz_3" },
            ],
          ],
        },
      });
    } catch (error) {
      console.error(error);
    }
  });
}
// Moskva shaxri
rossiya("btn_uz_33", `Vakolatxona raxbari: \nMansurov Saidnumon Yo'lbarsxonovich`, 55.73481971124438, 37.62056874267248)


// ----------<<<<ortga>>>>----------
// Назад
bot.action("btn_ru_4", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(
      ctx.chat.id,
      "Xush kelibsiz!\nДобропожаловать!",
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "🇺🇿 O`zbekcha", callback_data: "btn_us_0" },
              { text: "🇷🇺 Руский", callback_data: "btn_ru_0" },
            ],
          ],
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
});
// Ortga qaytish
bot.action("btn_uz_4", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(
      ctx.chat.id,
      "Xush kelibsiz!\nДобропожаловать!",
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "🇺🇿 O`zbekcha", callback_data: "btn_us_0" },
              { text: "🇷🇺 Руский", callback_data: "btn_ru_0" },
            ],
          ],
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
});
// Главная страница
bot.action("btn_ru_3", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(
      ctx.chat.id,
      "Xush kelibsiz!\nДобропожаловать!",
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "🇺🇿 O`zbekcha", callback_data: "btn_us_0" },
              { text: "🇷🇺 Руский", callback_data: "btn_ru_0" },
            ],
          ],
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
});
// Bosh sahifa
bot.action("btn_uz_3", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(
      ctx.chat.id,
      "Xush kelibsiz!\nДобропожаловать!",
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "🇺🇿 O`zbekcha", callback_data: "btn_us_0" },
              { text: "🇷🇺 Руский", callback_data: "btn_ru_0" },
            ],
          ],
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
});
// Manzildan ortga qaytish
bot.action("btn_uz_11", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇺🇿 O`zbekcha", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📍Manzillar", callback_data: "btn_uz_1" },
            { text: "🗓 Yangiliklar", url: "https://t.me/migratsiyaagentligi" },
          ],
          [
            {
              text: "📝 Murojaat qoldirish",
              url: "http://www.migration.uz/application/create",
            },
            { text: "❗️ Mehnat migrantlari uchun", callback_data: "btn_uz_2" },
          ],
          [
            { text: "🏠 Bosh sahifa", callback_data: "btn_uz_3" },
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_4" },
          ],
          [{ text: "🖥  Bog`lanish", callback_data: "btn_uz_5" }],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Адрес назад
bot.action("btn_ru_11", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇷🇺 Руский", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📍Адреса", callback_data: "btn_ru_1" },
            { text: "🗓Новости", url: "https://t.me/migratsiyaagentligi" },
          ],
          [
            {
              text: "📝 Оставить заявку",
              url: "http://www.migration.uz/application/create",
            },
            { text: "❗️ Для мигрантов", callback_data: "btn_ru_2" },
          ],
          [
            { text: "🏠 Главная страница", callback_data: "btn_ru_3" },
            { text: "⬅️ Назад", callback_data: "btn_ru_4" },
          ],
          [{ text: "🖥  Связаться", callback_data: "btn_ru_5" }],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Bog`lanish
bot.action("btn_uz_5", async (ctx) => {
  try {
    ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🖥  Bog`lanish", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "🌍 Web site", url: "http://migration.uz/" },
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_12" },
          ],
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
});
// Связаться
bot.action("btn_ru_5", async (ctx) => {
  try {
    ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🖥  Связаться", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "🌍 Web site", url: "http://migration.uz/" },
            { text: "⬅️ Назад", callback_data: "btn_ru_12" },
          ],
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
});
// Boglanishdan ortga qaytish
bot.action("btn_uz_12", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇺🇿 O`zbekcha", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📍Manzillar", callback_data: "btn_uz_1" },
            { text: "🗓 Yangiliklar", url: "https://t.me/migratsiyaagentligi" },
          ],
          [
            {
              text: "📝 Murojaat qoldirish",
              url: "http://www.migration.uz/application/create",
            },
            { text: "❗️ Mehnat migrantlari uchun", callback_data: "btn_uz_2" },
          ],
          [
            { text: "🏠 Bosh sahifa", callback_data: "btn_uz_3" },
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_4" },
          ],
          [{ text: "🖥  Bog`lanish", callback_data: "btn_uz_5" }],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Связаться вернуться
bot.action("btn_ru_12", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇷🇺 Руский", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📍Адреса", callback_data: "btn_ru_1" },
            { text: "🗓Новости", url: "https://t.me/migratsiyaagentligi" },
          ],
          [
            {
              text: "📝 Оставить заявку",
              url: "http://www.migration.uz/application/create",
            },
            { text: "❗️ Для мигрантов", callback_data: "btn_ru_2" },
          ],
          [
            { text: "🏠 Главная страница", callback_data: "btn_ru_3" },
            { text: "⬅️ Назад", callback_data: "btn_ru_4" },
          ],
          [{ text: "🖥  Связаться", callback_data: "btn_ru_5" }],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

// ----------<<<<ortga>>>>----------

// Hududiy filiallar
bot.action("btn_uz_6", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇺🇿 O`zbekcha", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Andijon", callback_data: "btn_uz_13" },
            { text: "Buxoro", callback_data: "btn_uz_14" },
          ],
          [
            { text: "Jizzax", callback_data: "btn_uz_15" },
            { text: "Qashqadaryo", callback_data: "btn_uz_16" },
          ],
          [
            { text: "Navoiy", callback_data: "btn_uz_17" },
            { text: "Namangan", callback_data: "btn_uz_18" },
          ],
          [
            { text: "Samarqand", callback_data: "btn_uz_19" },
            { text: "Surxandaryo", callback_data: "btn_uz_20" },
          ],
          [
            { text: "Sirdaryo", callback_data: "btn_uz_21" },
            { text: "Toshkent viloyati", callback_data: "btn_uz_22" },
          ],
          [
            { text: "Toshkent shahri", callback_data: "btn_uz_23" },
            { text: "Nukus", callback_data: "btn_uz_24" },
          ],
          [
            { text: "Xorazm", callback_data: "btn_uz_25" },
            { text: "Farg'ona", callback_data: "btn_uz_26" },
          ],
          [
            { text: "🏠 Bosh sahifa", callback_data: "btn_uz_3" },
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_27" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Региональные филиалы
bot.action("btn_ru_6", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇷🇺 Руский", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Андижан", callback_data: "btn_ru_13" },
            { text: "Бухара", callback_data: "btn_ru_14" },
          ],
          [
            { text: "Жиззах", callback_data: "btn_ru_15" },
            { text: "Кашкадаря", callback_data: "btn_ru_16" },
          ],
          [
            { text: "Наваи", callback_data: "btn_ru_17" },
            { text: "Наманган", callback_data: "btn_ru_18" },
          ],
          [
            { text: "Самарканд", callback_data: "btn_ru_19" },
            { text: "Сурхандаря", callback_data: "btn_ru_20" },
          ],
          [
            { text: "Сирдаря", callback_data: "btn_ru_21" },
            { text: "Ташкентская область", callback_data: "btn_ru_22" },
          ],
          [
            { text: "Город Ташкент", callback_data: "btn_ru_23" },
            { text: "Нукус", callback_data: "btn_ru_24" },
          ],
          [
            { text: "Хоразм", callback_data: "btn_ru_25" },
            { text: "Фергана", callback_data: "btn_ru_26" },
          ],
          [
            { text: "🏠 Bosh sahifa", callback_data: "btn_ru_3" },
            { text: "⬅️ Ortga qaytish", callback_data: "btn_ru_27" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

// Hududiy filiallar
function infoMap(btn, text, lat, lan, name) {
  bot.action(btn, async (ctx) => {
    try {
      await ctx.deleteMessage();
      await bot.telegram.sendLocation(ctx.chat.id, lat, lan);
      await bot.telegram.sendMessage(ctx.chat.id, `${name}${text}`, {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_6" },
              { text: "🏠 Bosh sahifa", callback_data: "btn_uz_3" },
            ],
          ],
        },
      });
    } catch (error) {
      console.error(error);
    }
  });
}
function infoMaRu(btn, text, lat, lan, name) {
  bot.action(btn, async (ctx) => {
    try {
      await ctx.deleteMessage();
      await bot.telegram.sendLocation(ctx.chat.id, lat, lan);
      await bot.telegram.sendMessage(ctx.chat.id, `${name}${text}`, {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "⬅️ Назад", callback_data: "btn_ru_6" },
              { text: "🏠 Гланая страница", callback_data: "btn_ru_3" },
            ],
          ],
        },
      });
    } catch (error) {
      console.error(error);
    }
  });
}
// Andijon
infoMap(
  "btn_uz_13",
  `\n\nFilial raxbari:\nSattorov Gavhar Adilovich\n\n☎️ +998 (95) 202 33 55 \n☎️ +998 (90) 571 47 77`,
  40.7814378842891,
  72.35021615864449,
  "Andijon filliali malumotlari"
);
// Андижан
infoMaRu(
  "btn_ru_13",
  `\n\nРуководитель филиала :\nСаттаров Гавхар Адилович\n\n☎️ +998 (95) 202 33 55 \n☎️ +998 (90) 571 47 77`,
  40.7814378842891,
  72.35021615864449,
  "Информация об Андижанском филиале"
);
// Buxoro
infoMap(
  "btn_uz_14",
  `\n\nFilial raxbari:\nXamdamov Anvar Normurodovich\n\n☎️ +998 (65) 226-56-99\n☎️ +998 (93) 686 11 78`,
  39.769712780281665,
  64.4076155238242,
  "Buxoro filliali malumotlari"
);
// Бухара
infoMaRu(
  "btn_ru_14",
  `\n\nРуководитель филиала :\nХамдамов Анвар Нормуродович\n\n☎️ +998 (65) 226-56-99\n☎️ +998 (93) 686 11 78`,
  39.769712780281665,
  64.4076155238242,
  "Информация об Бухарском филиале"
);
// Jizzax
infoMap(
  "btn_uz_15",
  `\n\nFilial raxbari:\nAbdusaidov Sunatillo Xusanovich\n\n☎️ +998 (72) 226 91 87\n☎️ +998 (93) 992 95 59`,
  40.159728432534514,
  67.82576239167302,
  "Jizzax filliali malumotlari"
);
// Джиззах
infoMaRu(
  "btn_ru_15",
  `\n\nРуководитель филиала :\nАбдусаидов Сунатулло Хусанович\n\n☎️ +998 (72) 226 91 87\n☎️ +998 (93) 992 95 59`,
  40.159728432534514,
  67.82576239167302,
  "Информация об Джиззахском филиале"
);
// Qashqadaryo
infoMap(
  "btn_uz_16",
  `\n\nFilial raxbari:\nRaximov Tojiddin Uralovich\n\n☎️ +998 (75) 224 05 25\n☎️ +998 (98) 777 34 37`,
  38.83258357412349,
  65.80787180101096,
  "Qashqadaryo filliali malumotlari"
);
// Кашкадаря
infoMaRu(
  "btn_ru_16",
  `\n\nРуководитель филиала :\nРахимов Тожиддин Уралович\n\n☎️ +998 (75) 224 05 25\n☎️ +998 (98) 777 34 37`,
  38.83258357412349,
  65.80787180101096,
  "Информация об Кашкадаринском филиале"
);
// Navoiy
infoMap(
  "btn_uz_17",
  `\n\nFilial raxbari:\nRajabov Qaxramon Razaqovich\n\n☎️ +998 (79) 224 11 60\n☎️ +998 (98) 778 10 17`,
  40.113077394611096,
  65.36002772752512,
  " Navoiy filliali malumotlari"
);
// Наваи
infoMaRu(
  "btn_ru_17",
  `\n\nРуководитель филиала :\nРажабов Кахрамон Разакович\n\n☎️ +998 (79) 224 11 60\n☎️ +998 (98) 778 10 17`,
  40.113077394611096,
  65.36002772752512,
  "Информация об Наваинском филиале"
);
// Namangan
infoMap(
  "btn_uz_18",
  `\n\nFilial raxbari:\nApakov Muhammadayubxon\n\n☎️ +998 (69) 227-94-64\n☎️ +998 (90) 554-22-20`,
  41.00093908208746,
  71.67300472496497,
  "Namangan filliali malumotlari"
);
// Наманган
infoMaRu(
  "btn_ru_18",
  `\n\nРуководитель филиала :\nАпаков Муҳаммадаюбхон\n\n☎️ +998 (69) 227-94-64\n☎️ +998 (90) 554-22-20`,
  41.00093908208746,
  71.67300472496497,
  "Информация об Наманганском филиале"
);
// Samarqand
infoMap(
  "btn_uz_19",
  `\n\nFilial raxbari:\nNormuratov Umid Muxtarovich\n\n☎️ +998 (66) 233-24-00\n☎️ +998 (99) 320-62-12`,
  39.655100723087166,
  66.96653327116424,
  "Samarqand filliali malumotlari"
);
// Самарканд
infoMaRu(
  "btn_ru_19",
  `\n\nРуководитель филиала :\nНормуратов Умид Мухтарович\n\n☎️ +998 (66) 233-24-00\n☎️ +998 (99) 320-62-12`,
  39.655100723087166,
  66.96653327116424,
  "Информация об Самаркандском филиале"
);
// Surxandaryo
infoMap(
  "btn_uz_20",
  `\n\nFilial raxbari:\nXamrayev Rustam Usmanovich\n\n☎️ +998 (76) 222-45-22\n☎️ +998 (99) 715-10-05`,
  37.22032974223839,
  67.27775099999998,
  "Surxandaryo filliali malumotlari"
);
// Сурхандаря
infoMaRu(
  "btn_ru_20",
  `\n\nРуководитель филиала :\nХамраев Рустам Усманович\n\n☎️ +998 (76) 222-45-22\n☎️ +998 (99) 715-10-05`,
  37.22032974223839,
  67.27775099999998,
  "Информация об Сурхандаринском филиале"
);
// Sirdaryo
infoMap(
  "btn_uz_21",
  `\n\nFilial raxbari:\nIsroilov Sirojiddin Mamaraximov\n\n☎️ +998 (67) 225-55-59\n☎️ +998 (94) 407-18-07`,
  40.49791294050947,
  68.77627303008786,
  "Sirdaryo filliali malumotlari"
);
// Сирдаря
infoMaRu(
  "btn_ru_21",
  `\n\nРуководитель филиала :\nИсроилов Сирожиддин Мамарахимович\n\n☎️ +998 (67) 225-55-59\n☎️ +998 (94) 407-18-07`,
  40.49791294050947,
  68.77627303008786,
  "Информация об Сирдаринском филиале"
);
// Toshkent viloyati
infoMap(
  "btn_uz_22",
  `\n\nFilial raxbari:\nBaxromov Nodir Qodirbek o\`g\`li\n\n☎️ +998 (99) 999 96 99`,
  41.067674257003375,
  69.34466988357757,
  "Toshkent viloyati filliali malumotlari"
);
// Ташкентская область
infoMaRu(
  "btn_ru_22",
  `\n\nРуководитель филиала :\nБахромов Нодир Кодирбек угли\n\n☎️ +998 (99) 999 96 99`,
  41.067674257003375,
  69.34466988357757,
  "Информация о Ташкентском областьном филиале"
);
// Toshkent shahri
infoMap(
  "btn_uz_23",
  `\n\nFilial raxbari:\nTeshabayev Ulug\`bek  Yuldashevich\n\n☎️ +998 (71) 236-30-40\n☎️ +998 (71) 236-00-23\n☎️ +998 (98) 007-50-03`,
  41.30307425515684,
  69.2819443979212,
  "Toshkent shahri filliali malumotlari"
);
// Город Ташкента
infoMaRu(
  "btn_ru_23",
  `\n\nРуководитель филиала :\nТешабаев Улуғбек Юлдашевич\n\n☎️ +998 (71) 236-30-40\n☎️ +998 (71) 236-00-23\n☎️ +998 (98) 007-50-03`,
  41.30307425515684,
  69.2819443979212,
  "Информация о Ташкентском городском филиале"
);
// Nukus
infoMap(
  "btn_uz_24",
  `\n\nFilial raxbari:\nAchilov Azamat Tursinbayevich\n\n☎️ +998 (61) 222-53-32\n☎️ +998 (91) 376-07-76`,
  42.44352183521285,
  59.61033841345555,
  "Nukus shahri filliali malumotlari"
);
// Нукус
infoMaRu(
  "btn_ru_24",
  `\n\nРуководитель филиала :\nАчилов Азамат Турсинбаевич\n\n☎️ +998 (61) 222-53-32\n☎️ +998 (91) 376-07-76`,
  42.44352183521285,
  59.61033841345555,
  "Информация о Нукуском филиале"
);
// Xorazm
infoMap(
  "btn_uz_25",
  `\n\nFilial raxbari:\nRamadanov Mixail Sergeyevich\n\n☎️ +998 (62) 224-12-35\n☎️ +998 (91) 376-07-76`,
  41.543709163865586,
  60.6154671327727,
  "Xorazm viloyati filliali malumotlari"
);
// Харазм
infoMaRu(
  "btn_ru_25",
  `\n\nРуководитель филиала :\nРамаданов Михаил Сергеевич\n\n☎️ +998 (62) 224-12-35\n☎️ +998 (91) 376-07-76`,
  41.543709163865586,
  60.6154671327727,
  "Информация о Харезеском филиале"
);
// Farg'ona
infoMap(
  "btn_uz_26",
  `\n\nFilial raxbari:\nAtabayev Otabek Ulug\`bekovich\n\n☎️ +998 (91) 661-07-77\n☎️ +998 (73) 244-40-01`,
  40.38805014203129,
  71.77078081349228,
  "Farg'ona viloyati filliali malumotlari"
);
// Фергана
infoMaRu(
  "btn_ru_26",
  `\n\nРуководитель филиала :\nАтабаев Отабек Улуғбекович\n\n☎️ +998 (91) 661-07-77\n☎️ +998 (73) 244-40-01`,
  40.38805014203129,
  71.77078081349228,
  "Информация о Ферганском филиале"
);

// ----------<<<<ortga>>>>----------
// Назад Региональные филиалы
bot.action("btn_ru_27", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇷🇺 Руский", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Региональные филиалы", callback_data: "btn_ru_6" }],
          [
            {
              text: "Представительства АВТМ за рубежом",
              callback_data: "btn_ru_7",
            },
          ],
          [{ text: "Посольства РУз за рубежом", callback_data: "btn_ru_8" }],
          [
            {
              text: "Генеральные консульства РУз за рубежом",
              callback_data: "btn_ru_9",
            },
          ],
          [
            { text: "🏠 Главная страница", callback_data: "btn_ru_3" },
            { text: "⬅️ Назад", callback_data: "btn_ru_11" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Ortga hududiy filiallardan
bot.action("btn_uz_27", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇺🇿 O`zbekcha", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Hududiy filiallar", callback_data: "btn_uz_6" }],
          [
            {
              text: "ТММА нинг хориждаги Ваколатхоналари",
              callback_data: "btn_uz_7",
            },
          ],
          [
            { text: "Elchixonalar", callback_data: "btn_uz_8" },
            { text: "Bosh Konsulliklar", callback_data: "btn_uz_9" },
          ],
          [
            { text: "🏠 Bosh sahifa", callback_data: "btn_ru_3" },
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_11" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// ----------<<<<назад>>>>----------

// ТММА нинг хориждаги Ваколатхоналари
bot.action("btn_uz_7", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇺🇿 O`zbekcha", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Vakolatxona", callback_data: "btn_uz_28" },
            { text: "Elchixona", callback_data: "btn_uz_29" },
          ],
          [
            { text: "🏠 Bosh sahifa", callback_data: "btn_ru_3" },
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_30" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Представительства АВТМ за рубежом
bot.action("btn_ru_7", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇷🇺 Руский", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Представительства", callback_data: "btn_ru_28" },
            { text: "Посольства", callback_data: "btn_ru_29" },
          ],
          [
            { text: "🏠 Bosh sahifa", callback_data: "btn_ru_3" },
            { text: "⬅️ Ortga qaytish", callback_data: "btn_ru_30" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});

// ----------<<<<ortga>>>>----------
// Ortga qaytish ТММА нинг хориждаги Ваколатхоналари
bot.action("btn_uz_30", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇺🇿 O`zbekcha", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Hududiy filiallar", callback_data: "btn_uz_6" }],
          [
            {
              text: "ТММА нинг хориждаги Ваколатхоналари",
              callback_data: "btn_uz_7",
            },
          ],
          [
            { text: "Elchixonalar", callback_data: "btn_uz_8" },
            { text: "Bosh Konsulliklar", callback_data: "btn_uz_9" },
          ],
          [
            { text: "🏠 Bosh sahifa", callback_data: "btn_ru_3" },
            { text: "⬅️ Ortga qaytish", callback_data: "btn_uz_11" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// Назад Представительства АВТМ за рубежом
bot.action("btn_ru_30", async (ctx) => {
  try {
    await ctx.deleteMessage();
    await bot.telegram.sendMessage(ctx.chat.id, "🇷🇺 Руский", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Региональные филиалы", callback_data: "btn_ru_6" }],
          [
            {
              text: "Представительства АВТМ за рубежом",
              callback_data: "btn_ru_7",
            },
          ],
          [{ text: "Посольства РУз за рубежом", callback_data: "btn_ru_8" }],
          [
            {
              text: "Генеральные консульства РУз за рубежом",
              callback_data: "btn_ru_9",
            },
          ],
          [
            { text: "🏠 Главная страница", callback_data: "btn_ru_3" },
            { text: "⬅️ Назад", callback_data: "btn_ru_11" },
          ],
        ],
      },
    });

    await ctx.replyWithHTML(text, {
      disable_web_page_preview: true,
    });
  } catch (error) {
    console.error(error);
  }
});
// ----------<<<<назад>>>>----------

bot.launch();
// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
