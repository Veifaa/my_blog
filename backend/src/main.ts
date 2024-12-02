import { NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationPipe} from "@nestjs/common";
import cookieParser from "cookie-parser";

async function bootstrap() : Promise<void> {
    const PORT = 3000;
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: 'http://localhost:63342', // укажи адрес твоего клиента
        credentials: true, // разрешает отправку cookies
    });

    app.use(cookieParser());

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // Убирает свойства, которых нет в DTO
            forbidNonWhitelisted: true, // Выбрасывает ошибку, если есть неизвестные свойства
            transform: true, // Автоматически преобразует типы данных (например, строки в числа)
        }),
    );

    await app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
}

bootstrap();