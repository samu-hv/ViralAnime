-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-04-2022 a las 01:27:45
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbtest`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(9) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `telephone_number` varchar(11) DEFAULT NULL,
  `adress` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `telephone_number`, `adress`) VALUES
(1, 'Jorge', 'jorge.mihalyczo@hotmail.com', NULL, NULL),
(2, 'iuri', 'iuri.micha@hotmail.com', NULL, NULL),
(3, 'JorgeM', 'jorgemiha@gmail.com', NULL, NULL),
(4, 'JorgeM', 'jorge.mihalyczo@hotmail.com', NULL, NULL),
(5, 'Jorge', 'jorgemiha@gmail.com', NULL, NULL),
(6, 'Jorge', 'jorge.mihalyczo@hotmail.com', NULL, NULL),
(7, 'Jorge', 'jorgemiha@gmail.com', NULL, NULL),
(8, 'Jorge', 'jorgemiha@gmail.com', NULL, NULL),
(9, 'Jorge', 'jorge.mihalyczo@hotmail.com', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
