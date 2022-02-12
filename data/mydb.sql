-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-02-2022 a las 00:46:45
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--
CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `mydb`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'rolBoardGame'),
(2, 'cardsGame'),
(3, 'accesories');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `image` varchar(80) NOT NULL,
  `descrip` varchar(400) NOT NULL,
  `StatusId` int(11) DEFAULT NULL,
  `CategoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `image`, `descrip`, `StatusId`, `CategoryId`) VALUES
(34, 'Uno', '2000', 'image-1644492381773.jpg', '¿Listo para el rey de los juegos rompe amistades? Disfrutá de tardes a pura risa y venganza despiadada entre amigos y amigas. Tendrás que quedarte sin cartas antes que los demás y cuando solo tengas una ¡No te olvides de decir UNO!', 2, 3),
(35, 'Breaking Bad', '3825', 'image-1644493349054.jpg', 'Reviví las mejores escenas de las cinco temporadas de Breaking Bad y sumergite en los peligros que se ocultan en los bajos fondos de Albuquerque con este nuevo juego de tablero basado en la exitosa serie de televisión.', 1, 1),
(36, 'The Walking Dead', '13300', 'image-1644491438988.jpg', 'En The Walking Dead: No Sanctuary, tienen que trabajar juntos para ganar. Un jugador se convierte en el líder e intenta que los demás sigan su enfoque. Si los otros jugadores desafían a su líder, la confianza flaquea, aumenta el estrés y cae la moral.', 1, 1),
(37, 'Escape Room', '3999', 'image-1644491870744.jpg', '¿Conoces ya el concepto Escape Room? El fenómeno de escape en vivo ya está disponible en juego de mesa! Reviví una auténtica experiencia Escape Room en tu casa!', 1, 1),
(38, 'Arkham Horror', '12900', 'image-1644492223986.jpg', 'Juego cooperativo en el que cada jugador adopta el papel de un investigador e intenta resolver aterradores misterios arcanos. Cada partida es un capítulo de una campaña mayor, en la que las decisiones tienen inesperadas consecuencias a largo plazo.', 2, 3),
(39, 'Set Age of Sigmar', '6450', 'image-1644493095115.jpg', 'Set de pinturas y 2 miniaturas de Los Vindicadores de los Forjados de la Tormenta para Warhammer.', 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(1, 'Novelties'),
(2, 'Offers'),
(3, 'General');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `user_alias` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `avatar` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `user_alias`, `email`, `pass`, `avatar`) VALUES
(15, 'aaa', 'aaa', 'aaa', 'aguspotter@gmail.com', '$2a$10$d36nCRUJJ6HZC25HeA6ewOkLlFtnVCGdiPH54i1IfIKkn2GDNncO2', 'default-avatar.png'),
(17, 'Bruno', 'Braconi', 'brbr22', 'brunorbraconi@hotmail.com', '$2a$10$l5rfyt9pIzRoEf41pVJvoeAiktxyT9tYwPqDzM17m5ku5lb6UIfCO', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Products_Status` (`StatusId`),
  ADD KEY `fk_Product_Category1` (`CategoryId`);

--
-- Indices de la tabla `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_Product_Category1` FOREIGN KEY (`CategoryId`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Products_Status` FOREIGN KEY (`StatusId`) REFERENCES `status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
