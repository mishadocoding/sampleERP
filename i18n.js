// UI strings live here; record values and form values remain language-independent.
const translations = Object.fromEntries(`
Overview|Umumiy ko‘rinish|Обзор
Inventory|Ombor|Склад
Orders|Buyurtmalar|Заказы
Purchasing|Ta’minot|Закупки
Employees|Xodimlar|Сотрудники
Customers|Mijozlar|Клиенты
Finances|Moliya|Финансы
Reports|Hisobotlar|Отчёты
Settings|Sozlamalar|Настройки
Workspace settings|Ish maydoni sozlamalari|Настройки рабочего пространства
Workspace|Ish maydoni|Рабочее пространство
MARKET WORKSPACE|SAVDO ISH MAYDONI|ТОРГОВОЕ ПРОСТРАНСТВО
Electronics & components|Elektronika va qismlar|Электроника и комплектующие
Demo workspace|Namoyish maydoni|Демонстрационный режим
Explore freely. Your changes stay here.|Bemalol sinab ko‘ring. O‘zgarishlar shu brauzerda saqlanadi.|Пробуйте свободно. Изменения сохраняются в этом браузере.
All systems operational|Barcha tizimlar ishlayapti|Все системы работают
Presentation demo|Namoyish talqini|Демонстрационная версия
Language|Til|Язык
Profile|Profil|Профиль
View stock alerts|Ombor ogohlantirishlari|Уведомления об остатках
Hide categories|Kategoriyalarni yashirish|Скрыть разделы
Show categories|Kategoriyalarni ko‘rsatish|Показать разделы
Demo role preview|Rollarni sinab ko‘rish|Просмотр по ролям
Choose a role to see the actions allowed by the administrator.|Administrator ruxsat bergan amallarni ko‘rish uchun rolni tanlang.|Выберите роль, чтобы увидеть разрешённые администратором действия.
Administrator|Administrator|Администратор
Seller|Sotuvchi|Продавец
Customer|Mijoz|Клиент
Full workspace access. Configure seller access in Settings.|To‘liq kirish. Sotuvchi ruxsatlarini Sozlamalarda belgilang.|Полный доступ. Настройте права продавца в разделе «Настройки».
Seller preview · Marcus Reed. Customer service and sales tools.|Sotuvchi — Marcus Reed. Mijozlar va savdo vositalari.|Продавец — Marcus Reed. Инструменты продаж и обслуживания клиентов.
Demo preview only. Use Administrator to return to the full workspace.|Bu namoyish rejimi. To‘liq ko‘rinishga qaytish uchun Administratorni tanlang.|Это демонстрационный режим. Для полного доступа выберите «Администратор».
Business overview|Biznes holati|Обзор бизнеса
A little clarity for a busy day. Here’s how your market is doing.|Bugungi ishlar uchun aniq ma’lumot. Do‘koningiz holatini kuzating.|Всё для рабочего дня. Следите за состоянием вашего магазина.
Export report|Hisobotni yuklab olish|Скачать отчёт
Create order|Buyurtma yaratish|Создать заказ
Total sales|Jami savdo|Общие продажи
Live total|Joriy jami|Текущая сумма
across recorded orders|qayd etilgan buyurtmalar bo‘yicha|по зарегистрированным заказам
orders awaiting fulfillment|ta buyurtma bajarilishini kutmoqda|заказов ожидают выполнения
Inventory value|Ombor qiymati|Стоимость запасов
unique products · at cost|xil mahsulot · tannarx bo‘yicha|видов товаров · по себестоимости
Active employees|Faol xodimlar|Активные сотрудники
Across online, store & operations|Onlayn, do‘kon va amaliyot bo‘yicha|Онлайн, магазин и операционный отдел
Sales performance|Savdo natijalari|Динамика продаж
A view of your marketplace activity|Savdo faoliyati ko‘rinishi|Обзор торговой деятельности
Online|Onlayn|Онлайн
In-store|Do‘konda|В магазине
7 days|7 kun|7 дней
30 days|30 kun|30 дней
Recorded sales|Qayd etilgan savdo|Зарегистрированные продажи
Orders in workspace|Ish maydonidagi buyurtmalar|Заказы в рабочем пространстве
Illustrative trend|Namunaviy grafik|Пример динамики
sample weekly data|namunaviy haftalik ma’lumot|пример данных за неделю
sample monthly data|namunaviy oylik ma’lumot|пример данных за месяц
One market. Two channels.|Bitta do‘kon. Ikki savdo kanali.|Один магазин. Два канала продаж.
Your sales, wherever they happen.|Barcha kanallardagi savdolaringiz.|Ваши продажи во всех каналах.
Online marketplace|Onlayn do‘kon|Интернет-магазин
Physical store|Jismoniy do‘kon|Розничный магазин
Web orders|Internet buyurtmalari|Интернет-заказы
Counter sales|Do‘kondagi savdo|Продажи в магазине
of sales|savdodan|от продаж
Connected through one inventory|Yagona ombor orqali bog‘langan|Единые складские остатки
A complete picture of your business|Biznesingizning to‘liq ko‘rinishi|Полная картина вашего бизнеса
View reports|Hisobotlarni ko‘rish|Смотреть отчёты
Recent orders|So‘nggi buyurtmalar|Последние заказы
The latest from your customers|Mijozlarning so‘nggi buyurtmalari|Последние заказы клиентов
View all orders|Barcha buyurtmalar|Все заказы
Order|Buyurtma|Заказ
Channel|Savdo kanali|Канал продаж
Total|Jami|Итого
Status|Holat|Статус
Processing|Tayyorlanmoqda|В обработке
Shipped|Jo‘natilgan|Отправлен
Completed|Bajarilgan|Завершён
Ordered|Buyurtma berilgan|Заказано
Received|Qabul qilingan|Получено
Low stock|Kam qoldiq|Мало на складе
In stock|Mavjud|В наличии
Out of stock|Tugagan|Нет в наличии
Inventory needs attention|Omborga e’tibor bering|Склад требует внимания
Keep your best sellers on the shelves.|Xaridorgir mahsulotlar tugab qolmasin.|Поддерживайте наличие популярных товаров.
left|qolgan|осталось
Min.|Eng kam|Мин.
Stock levels look healthy.|Zaxiralar yetarli.|Запасов достаточно.
Stay a step ahead of stockouts|Mahsulotlar tugashidan oldin choralar ko‘ring|Пополняйте запасы заранее
Manage stock|Omborni boshqarish|Управление остатками
Every product, every part, in one place.|Barcha mahsulot va qismlar bir joyda.|Все товары и детали в одном месте.
Add product|Mahsulot qo‘shish|Добавить товар
Products|Mahsulotlar|Товары
Units available|Mavjud dona|Доступно единиц
Shared between store and online|Do‘kon va onlayn savdo uchun umumiy|Общие остатки для магазина и онлайн-продаж
Valued at purchase cost|Xarid tannarxi bo‘yicha|По закупочной стоимости
Products at or below minimum|Eng kam miqdorga yetgan mahsulotlar|Товары на уровне минимума или ниже
Electronics, components & spare parts|Elektronika, qismlar va ehtiyot qismlar|Электроника, комплектующие и запчасти
Search products or SKU|Mahsulot yoki kodni qidirish|Поиск товара или артикула
Laptops|Noutbuklar|Ноутбуки
Phones|Telefonlar|Телефоны
Components|Qismlar|Комплектующие
Spare parts|Ehtiyot qismlar|Запчасти
Accessories|Aksessuarlar|Аксессуары
All|Barchasi|Все
Product / SKU|Mahsulot / Kod|Товар / Артикул
Category|Kategoriya|Категория
Location|Joylashuv|Расположение
Available|Mavjud|Доступно
Unit price|Dona narxi|Цена за единицу
units|dona|шт.
Browser-saved demo data|Namoyish ma’lumotlari brauzerda saqlanadi|Демо-данные сохранены в браузере
No matching records.|Mos yozuvlar topilmadi.|Подходящих записей нет.
From checkout to handover. Keep every order moving.|Buyurtmadan topshirishgacha. Har bir buyurtmani kuzating.|От оформления до выдачи. Следите за каждым заказом.
Search order or customer|Buyurtma yoki mijozni qidirish|Поиск заказа или клиента
Select an order to see its details and update fulfillment.|Tafsilotlar va holatni yangilash uchun buyurtmani tanlang.|Выберите заказ для просмотра и обновления статуса.
Keep your supply chain a step ahead of demand.|Talabga mos zaxira ta’minotini rejalashtiring.|Планируйте поставки с учётом спроса.
Purchase order|Ta’minot buyurtmasi|Заказ поставщику
Supplier|Yetkazib beruvchi|Поставщик
Product|Mahsulot|Товар
Quantity|Miqdor|Количество
Action|Amal|Действие
Receive stock|Mahsulotni qabul qilish|Принять товар
Stock added|Omborga qo‘shildi|Товар добавлен
Receiving a purchase adds its quantity to inventory. Each purchase can be received once.|Qabul qilinganda mahsulot omborga qo‘shiladi. Har bir ta’minot faqat bir marta qabul qilinadi.|При получении товар добавляется на склад. Каждую поставку можно принять один раз.
Your people|Jamoangiz|Ваша команда
The team behind your marketplace, online and on the floor.|Do‘kon va onlayn savdo jamoasi.|Команда магазина и онлайн-продаж.
Add employee|Xodim qo‘shish|Добавить сотрудника
Search name or role|Ism yoki lavozimni qidirish|Поиск по имени или должности
Store|Do‘kon|Магазин
Warehouse|Omborxona|Склад
Workshop|Ustaxona|Мастерская
Active|Faol|Активен
On leave|Ta’tilda|В отпуске
No employees match.|Mos xodimlar topilmadi.|Сотрудники не найдены.
Marketplace manager|Savdo maydoni menejeri|Менеджер торговой площадки
Sales associate|Savdo xodimi|Продавец-консультант
Inventory specialist|Ombor mutaxassisi|Специалист по складу
Repair technician|Ta’mirlash ustasi|Мастер по ремонту
Customer support|Mijozlarga yordam|Поддержка клиентов
Operations|Boshqaruv|Операционный отдел
Retail|Chakana savdo|Розница
Repairs|Ta’mirlash|Ремонт
Web|Internet|Интернет
A closer look at the people who shop with you.|Sizdan xarid qiladigan mijozlar haqida.|Подробнее о ваших покупателях.
Search customers|Mijozlarni qidirish|Поиск клиентов
Total spent|Jami xarid summasi|Сумма покупок
Last order|So‘nggi buyurtma|Последний заказ
Channels|Savdo kanallari|Каналы продаж
Customer purchase history|Mijozning xaridlar tarixi|История покупок клиента
View order|Buyurtmani ko‘rish|Смотреть заказ
A simple financial snapshot of the demo marketplace.|Namoyish do‘konining moliyaviy holati.|Финансовый обзор демонстрационного магазина.
Export sales|Savdo hisobotini yuklash|Скачать отчёт о продажах
Cost of goods sold|Sotilgan mahsulotlar tannarxi|Себестоимость проданных товаров
Gross profit|Yalpi foyda|Валовая прибыль
Received purchases|Qabul qilingan ta’minot|Полученные поставки
All demo orders, including processing|Barcha buyurtmalar, tayyorlanayotganlari bilan|Все демо-заказы, включая заказы в обработке
Purchase cost of ordered items|Buyurtma qilingan mahsulotlar tannarxi|Закупочная стоимость заказанных товаров
Sales less cost of goods sold|Savdo summasidan tannarx ayrilgan|Продажи за вычетом себестоимости
Inventory purchases received in demo|Namoyishda qabul qilingan mahsulotlar|Полученные поставки в демо
Sales ledger|Savdo ro‘yxati|Реестр продаж
Demo sales records · taxes, payroll, refunds and payment reconciliation are outside this prototype.|Namoyish savdolari · soliq, ish haqi, qaytarish va to‘lovlarni solishtirish bu namoyishga kirmaydi.|Демо-продажи · налоги, зарплата, возвраты и сверка платежей не входят в прототип.
Reference|Raqam|Номер
Date|Sana|Дата
Order value|Buyurtma qiymati|Стоимость заказа
Fulfillment|Bajarilish|Выполнение
Choose a report, then choose a file format.|Hisobotni, so‘ng fayl formatini tanlang.|Выберите отчёт и формат файла.
Administrator: all reports are available.|Administrator: barcha hisobotlar mavjud.|Администратор: доступны все отчёты.
Seller: only reports enabled by the administrator are available.|Sotuvchi: faqat administrator ruxsat bergan hisobotlar mavjud.|Продавец: доступны только разрешённые администратором отчёты.
Inventory snapshot|Ombor holati hisoboti|Отчёт об остатках
Stock quantities, purchase costs, prices and locations.|Qoldiqlar, tannarx, narxlar va joylashuvlar.|Остатки, закупочные цены, цены продажи и расположение.
Sales & orders|Savdo va buyurtmalar|Продажи и заказы
Customer orders, products, quantities, prices and fulfillment status.|Mijoz buyurtmalari, mahsulotlar, miqdor, narx va bajarilish holati.|Заказы клиентов, товары, количество, цены и статусы.
Team directory|Jamoa ro‘yxati|Справочник сотрудников
People, roles, work locations and contact information.|Xodimlar, lavozimlar, ish joyi va aloqa ma’lumotlari.|Сотрудники, должности, места работы и контакты.
Purchasing register|Ta’minot ro‘yxati|Реестр закупок
Supplier orders, quantities and receiving status.|Yetkazib beruvchi buyurtmalari, miqdorlar va qabul holati.|Заказы поставщикам, количество и статус получения.
Download report|Hisobotni yuklab olish|Скачать отчёт
No reports enabled. Ask your administrator.|Hisobotlarga ruxsat yo‘q. Administratorga murojaat qiling.|Отчёты недоступны. Обратитесь к администратору.
File format|Fayl formati|Формат файла
CSV · Spreadsheet|CSV · Elektron jadval|CSV · Электронная таблица
JSON · Structured data|JSON · Tuzilgan ma’lumot|JSON · Структурированные данные
HTML · Printable report|HTML · Chop etiladigan hisobot|HTML · Отчёт для печати
HTML reports open in your browser. Use Print to save as PDF.|HTML hisoboti brauzerda ochiladi. PDF sifatida saqlash uchun Chop etish buyrug‘idan foydalaning.|HTML-отчёт открывается в браузере. Для сохранения в PDF используйте печать.
A safe place to explore how an ERP works.|ERP ishini xavfsiz sinab ko‘rish maydoni.|Безопасное знакомство с работой ERP.
Local presentation prototype · USD · Online marketplace & physical electronics market|Mahalliy namoyish talqini · USD · Onlayn va jismoniy elektronika do‘koni|Локальный прототип · USD · Интернет-магазин и розничный магазин электроники
This prototype runs entirely in your browser. Records are stored in local storage for this browser and origin. It has no server, login, multi-user synchronization, payment processing or production accounting. Use sample data only.|Namoyish brauzerda ishlaydi va ma’lumotlarni shu brauzerda saqlaydi. Server, haqiqiy kirish, foydalanuvchilararo almashish, to‘lov va buxgalteriya mavjud emas. Faqat namunaviy ma’lumotlardan foydalaning.|Прототип работает в браузере и хранит данные локально. Сервер, вход, синхронизация пользователей, платежи и бухгалтерия отсутствуют. Используйте только тестовые данные.
Demo activity|Amallar tarixi|История действий
No changes yet. Try creating an order or receiving a purchase.|Hali o‘zgarishlar yo‘q. Buyurtma yarating yoki ta’minotni qabul qiling.|Изменений пока нет. Создайте заказ или примите поставку.
Reset demo data|Namunaviy ma’lumotlarni tiklash|Сбросить демо-данные
Reset demo workspace?|Namoyish ma’lumotlari tiklansinmi?|Сбросить демо-данные?
This removes your browser-saved changes and restores the original sample records.|Brauzerda saqlangan o‘zgarishlar o‘chiriladi va dastlabki ma’lumotlar tiklanadi.|Сохранённые изменения будут удалены, исходные данные восстановлены.
Keep changes|O‘zgarishlarni saqlash|Сохранить изменения
Reset sample data|Namunalarni tiklash|Восстановить примеры
Seller permissions|Sotuvchi ruxsatlari|Права продавца
Choose the actions available in the Seller preview.|Sotuvchi ko‘rinishida ruxsat etilgan amallarni tanlang.|Выберите доступные продавцу действия.
Create orders|Buyurtmalar yaratish|Создание заказов
Update fulfillment|Bajarilish holatini yangilash|Обновление статуса заказов
Export sales reports|Savdo hisobotlarini yuklash|Экспорт отчётов о продажах
Export stock availability|Ombor qoldig‘ini yuklash|Экспорт доступных остатков
Save seller permissions|Sotuvchi ruxsatlarini saqlash|Сохранить права продавца
Select an order to see items, quantity and status.|Mahsulotlar, miqdor va holatni ko‘rish uchun buyurtmani tanlang.|Выберите заказ, чтобы увидеть товары, количество и статус.
Seller dashboard|Sotuvchi paneli|Панель продавца
Serve customers, create orders and follow fulfillment.|Mijozlarga xizmat qiling, buyurtma yarating va bajarilishini kuzating.|Обслуживайте клиентов, создавайте заказы и следите за выполнением.
Across store and online|Do‘kon va onlayn savdo bo‘yicha|В магазине и онлайн
Awaiting fulfillment|Bajarilishini kutmoqda|Ожидают выполнения
Ready for your next action|Keyingi amalingizni kutmoqda|Ожидают вашего действия
Check availability before selling|Sotishdan oldin qoldiqni tekshiring|Проверяйте наличие перед продажей
Manage orders|Buyurtmalarni boshqarish|Управление заказами
Check stock|Qoldiqni tekshirish|Проверить остатки
Stock availability|Mavjud qoldiqlar|Доступные остатки
Available quantities and selling prices.|Mavjud miqdorlar va sotish narxlari.|Доступное количество и цены продажи.
Enter valid selling and purchase prices.|Sotish narxi va xarid tannarxini to‘g‘ri kiriting.|Введите корректные цены продажи и закупки.
Filter records|Yozuvlarni saralash|Фильтр записей
Chart period|Grafik davri|Период графика
Illustrative online and in-store sales trends. Sample chart, not calculated from orders.|Onlayn va do‘kon savdosining namunaviy grafigi. Buyurtmalardan hisoblanmagan.|Пример графика онлайн-продаж и продаж магазина. Не рассчитан по заказам.
Nov|Noy|Ноя
Oct|Okt|Окт
Choose a product to check its price and available quantity.|Narxi va mavjud miqdorini ko‘rish uchun mahsulotni tanlang.|Выберите товар, чтобы узнать цену и доступное количество.
Close dialog|Oynani yopish|Закрыть окно
Cancel|Bekor qilish|Отмена
Customer name|Mijoz ismi|Имя клиента
Online and in-store orders share the same stock.|Onlayn va do‘kon buyurtmalari yagona zaxiradan foydalanadi.|Онлайн-заказы и заказы в магазине используют общие остатки.
Sales channel|Savdo kanali|Канал продаж
Available stock|Mavjud qoldiq|Доступный остаток
Stock is deducted when you create the order. Status starts as Processing.|Buyurtma yaratilganda ombor qoldig‘i kamayadi. Boshlang‘ich holat: Tayyorlanmoqda.|Остаток уменьшается при создании заказа. Начальный статус: В обработке.
Create a product or spare-part inventory record.|Mahsulot yoki ehtiyot qism yozuvini yarating.|Создайте складскую карточку товара или запчасти.
Product name|Mahsulot nomi|Название товара
Selling price ($)|Sotish narxi ($)|Цена продажи ($)
Purchase cost ($)|Xarid tannarxi ($)|Закупочная стоимость ($)
Opening quantity|Boshlang‘ich miqdor|Начальное количество
Low-stock threshold|Eng kam qoldiq|Минимальный остаток
Storage location|Saqlash joyi|Место хранения
Bring your web and store teams into one directory.|Onlayn va do‘kon jamoasini yagona ro‘yxatga qo‘shing.|Добавьте сотрудников магазина и онлайн-команды в единый справочник.
Full name|To‘liq ism|Полное имя
Role|Lavozim|Должность
Email|Elektron pochta|Электронная почта
Team|Jamoa|Отдел
Work location|Ish joyi|Место работы
New purchase order|Yangi ta’minot buyurtmasi|Новый заказ поставщику
Order inventory from your product’s supplier.|Mahsulot yetkazib beruvchisiga buyurtma bering.|Закажите товар у поставщика.
Quantity to order|Buyurtma miqdori|Количество к заказу
Stock is updated after you mark this purchase as received.|Ta’minotni qabul qilgandan keyin qoldiq yangilanadi.|Остаток обновится после получения поставки.
Selling price|Sotish narxi|Цена продажи
Unit cost|Dona tannarxi|Себестоимость единицы
Stock value|Qoldiq qiymati|Стоимость остатка
Reorder threshold|Qayta buyurtma chegarasi|Порог пополнения
Stock adjustment|Qoldiqni tuzatish|Корректировка остатков
Add stock|Omborga qo‘shish|Добавить остаток
Remove stock|Ombordan ayirish|Списать остаток
Reason|Sabab|Причина
Update stock|Qoldiqni yangilash|Обновить остатки
Order total|Buyurtma jami|Сумма заказа
Fulfillment status|Bajarilish holati|Статус выполнения
Fulfillment updates do not deduct stock again.|Holat yangilanishi qoldiqni qayta kamaytirmaydi.|Обновление статуса не списывает товар повторно.
Save status|Holatni saqlash|Сохранить статус
This action is not available for this role.|Bu amal ushbu rol uchun mavjud emas.|Это действие недоступно для данной роли.
All products are out of stock.|Barcha mahsulotlar tugagan.|Все товары закончились.
Please complete every field.|Barcha maydonlarni to‘ldiring.|Заполните все поля.
Enter a positive whole quantity.|Musbat butun miqdor kiriting.|Введите положительное целое количество.
No product available.|Mahsulot mavjud emas.|Товар недоступен.
Only|Faqat|Только
Stock cannot drop below zero.|Qoldiq noldan kam bo‘la olmaydi.|Остаток не может быть отрицательным.
Stock and threshold must be whole, nonnegative numbers.|Qoldiq va chegara manfiy bo‘lmagan butun son bo‘lishi kerak.|Остаток и порог должны быть целыми неотрицательными числами.
Invalid status change.|Holatni bunday o‘zgartirib bo‘lmaydi.|Недопустимое изменение статуса.
Saved. Workspace updated.|Saqlandi. Ish maydoni yangilandi.|Сохранено. Рабочее пространство обновлено.
No data to export|Yuklash uchun ma’lumot yo‘q|Нет данных для экспорта
Report downloaded|Hisobot yuklab olindi|Отчёт скачан
Purchase received. Inventory updated.|Ta’minot qabul qilindi. Ombor yangilandi.|Поставка получена. Остатки обновлены.
Original sample data restored|Dastlabki namunalar tiklandi|Исходные данные восстановлены
Browser storage unavailable. Changes last for this session.|Brauzer xotirasi mavjud emas. O‘zgarishlar faqat shu seansda saqlanadi.|Хранилище браузера недоступно. Изменения сохранятся только в этом сеансе.
Updated seller permissions|Sotuvchi ruxsatlari yangilandi|Права продавца обновлены
Created|Yaratildi|Создано
for|uchun|для
Added product|Mahsulot qo‘shildi|Добавлен товар
Added employee|Xodim qo‘shildi|Добавлен сотрудник
Created purchase|Ta’minot yaratildi|Создана закупка
marked|holati|статус
id|Raqam|Номер
name|Nomi|Название
productName|Mahsulot nomi|Название товара
qty|Miqdor|Количество
price|Narx|Цена
cost|Tannarx|Себестоимость
stock|Qoldiq|Остаток
min|Eng kam|Минимум
costTotal|Jami tannarx|Общая себестоимость
icon|Belgi|Значок
site|Ish joyi|Место работы
`.trim().split('\n').map(row=>{const [en,uz,ru]=row.split('|');return [en.toLowerCase(),[en,uz,ru]]}));
const translationPattern=new RegExp('(?<![a-zA-Z])('+Object.values(translations).map(row=>row[0].replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).sort((a,b)=>b.length-a.length).join('|')+')(?![a-zA-Z])','gi');
function t(text) {
  if(language==='en')return String(text);
  return String(text).replace(translationPattern,match=>{
    const translated=translations[match.toLowerCase()][language==='uz'?1:2];
    return match.length>1&&match===match.toUpperCase()?translated.toUpperCase():translated;
  });
}
function translateHTML(html) {
  return html.split(/(<[^>]+>)/g).map(part=>part.startsWith('<')?part.replace(/(placeholder|aria-label|title)="([^"]*)"/g,(_,key,value)=>`${key}="${esc(t(value))}"`):t(part)).join('');
}
