const profile = {
  firstName: "Алексей",
  lastName: "Иванов",
  email: "alexey.ivanov@example.com",
  job: "Программист",
  position: "Junior Frontend Developer",
  age: 25,
  country: "Россия",
  city: "Москва",
  relationship: "В отношениях",
  hobbies: ["Книги", "Спорт", "Космос"]
};

console.log(" Мой профиль:", profile);


const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Серебристый",
  transmission: "Автомат"
};

car.owner = profile;

console.log(" Данные об авто:", car);


function addMaxSpeed(vehicle) {
  if (!vehicle.hasOwnProperty("maxSpeed")) {
    vehicle.maxSpeed = 220;
    console.log(" maxSpeed добавлена");
  } else {
    console.log(" maxSpeed уже есть");
  }
}

addMaxSpeed(car);
addMaxSpeed(car);


function getProp(obj, key) {
  if (obj.hasOwnProperty(key)) {
    console.log(` ${key}: ${obj[key]}`);
  } else {
    console.log(` Свойство "${key}" не найдено`);
  }
}

console.log("— Получение значения свойства —");
getProp(car, "brand");
getProp(car, "maxSpeed");
getProp(car, "nothing");


const products = ["Молоко", "Хлеб", "Яйца", "Масло", "Сыр"];

console.log(" Продукты:", products);


const books = [
  { title: "Планета обезьян", author: "Пьер Буль", year: 1963, cover: "Оранжевый", genre: "Фантастика" },
  { title: "Белый клык", author: "Джек Лондон", year: 1906, cover: "Белый", genre: "Приключения" },
  { title: "Марсианские хроники", author: "Рэй Брэдбери", year: 1950, cover: "Красный", genre: "Фантастика" }
];

books.push({ title: "Зов предков", author: "Джек Лондон", year: 1903, cover: "Коричневый", genre: "Приключения" });

console.log(" Книги (животные/космос):", books);


const sportBooks = [
  { title: "Игра тенниса", author: "Джон Макфи", year: 1969, cover: "Зелёный", genre: "Спорт" },
  { title: "Футбол: тактика", author: "Алекс Фергюсон", year: 2012, cover: "Красный", genre: "Спорт" },
  { title: "Бег ради жизни", author: "Кристофер Макдугл", year: 2009, cover: "Синий", genre: "Спорт" }
];

const allBooks = [...books, ...sportBooks];

console.log(" Все книги (объединённые):", allBooks);


function markRare(bookList) {
  return bookList.map(book => ({
    ...book,
    isRare: book.year > 2000
  }));
}

const rareBooks = markRare(allBooks);

console.log(" Книги с редкостью (isRare):", rareBooks);