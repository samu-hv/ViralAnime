# ViralAnime

**PARA EJECUTAR LA WEB
 
  - Importar la base de de datos
  - Ejecutar npm i
  - Ejecutar node app
 
**BASE DE DATOS

--Base de datos: `viralanime`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animelist`
--

CREATE TABLE `animelist` (
  `id` int(11) NOT NULL,
  `status` text NOT NULL,
  `id_anime` int(10) NOT NULL,
  `username` varchar(100) NOT NULL,
  `title` text NOT NULL,
  `img` varchar(100) NOT NULL,
  `score` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `commentsanime`
--

CREATE TABLE `commentsanime` (
  `id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `id_anime` int(100) NOT NULL,
  `username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(40) NOT NULL,
  `favoriteChar` varchar(100) NOT NULL,
  `date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `animelist`
--
ALTER TABLE `animelist`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `commentsanime`
--
ALTER TABLE `commentsanime`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `animelist`
--
ALTER TABLE `animelist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
  
--
-- AUTO_INCREMENT de la tabla `commentsanime`
--
ALTER TABLE `commentsanime`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

