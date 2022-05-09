-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: pawgarden
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idProducto` varchar(100) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `tipo` varchar(100) DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `tamano` varchar(200) DEFAULT NULL,
  `material` varchar(100) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES ('p001','impermeable reflejante','ropa',12,449,'amarillo','30 cm','velcro','Havenfly'),('p002','impermeable reflejante','ropa',25,449,'amarillo','60 cm','velcro','Havenfly'),('p003','bolsa de basura portatil','higiene',12,299,'azul','8 cm','pp pe','luna'),('p004','bolsa de basura portatil','higiene',12,299,'amarillo','9 cm','pp pe','luna'),('p005','bolsa de basura portatil','higiene',12,299,'verde','10 cm','pp pe','luna'),('p006','bolsa de basura portatil','higiene',12,299,'rojo','11 cm','pp pe','luna'),('p007','bolsa de basura portatil','higiene',12,299,'blanco','12 cm','pp pe','luna'),('p008','botella de agua','accesorios para alimentos',32,340,'amarillo','19 cm','acero inoxidable','Generica'),('p009','botella de agua','accesorios para alimentos',10,340,'azul','20 cm','acero inoxidable','Generica'),('p010','botella de agua','accesorios para alimentos',8,340,'verde','21 cm','acero inoxidable','Generica'),('p011','cama iglu','camas',41,350,'gris','60 cm','algodon-poliestireno','Shop Ar'),('p012','cama iglu','camas',12,350,'azul','60 cm','algodon-poliestireno','Shop Ar'),('p013','cama iglu','camas',19,350,'rosa','60 cm','algodon-poliestireno','Shop Ar'),('p014','collar led','seguridad',55,200,'amarillo','30 cm','textil','Innov Pet'),('p015','collar led','seguridad',21,200,'azul','31 cm','textil','Innov Pet'),('p016','collar led','seguridad',13,200,'verde','32 cm','textil','Innov Pet'),('p017','collar led','seguridad',29,200,'rojo','33 cm','textil','Innov Pet'),('p018','collar led','seguridad',15,200,'naranja','34 cm','textil','Innov Pet'),('p019','limpia patitas','higiene',22,190,'rosa','7 cm','silicona suave','Loxor'),('p020','limpia patitas','higiene',15,190,'azul','7 cm','silicona suave','Loxor'),('p021','alfombra para lamer','accesorios para alimentos',19,400,'verde','21 cm','silicona grado alimenticio','Ulmpp'),('p022','alfombra para lamer','accesorios para alimentos',23,400,'azul','21 cm','silicona grado alimenticio','Ulmpp'),('p023','entrenador para ir al bano','higiene',45,370,'verde','43 cm','plastico sintetico','Easy pet'),('p024','zapatos de malla para perros','ropa',5,299,'rosa','8 cm','tejido','Malla'),('p025','zapatos de malla para perros','ropa',22,299,'verde','8 cm','tejido','Malla'),('p026','zapatos de malla para perros','ropa',34,299,'blanca','8 cm','tejido','Malla'),('p027','zapatos de malla para perros','ropa',43,299,'negro','8 cm','tejido','Malla'),('p028','zapatos de malla para perros','ropa',13,299,'rojo','8 cm','tejido','Malla'),('p029','zapatos de malla para perros','ropa',21,299,'azul','8 cm','tejido','Malla'),('p030','zapatos de malla para perros','ropa',12,299,'rosa','12 cm','tejido','Malla'),('p031','zapatos de malla para perros','ropa',12,299,'verde','12 cm','tejido','Malla'),('p032','zapatos de malla para perros','ropa',22,299,'blanca','12 cm','tejido','Malla'),('p033','zapatos de malla para perros','ropa',32,299,'negro','12 cm','tejido','Malla'),('p034','zapatos de malla para perros','ropa',12,299,'rojo','12 cm','tejido','Malla'),('p035','zapatos de malla para perros','ropa',14,299,'azul','12 cm','tejido','Malla'),('p036','mochila con arnes','seguridad',12,215,'azul','13 cm','sintetico','Nilla'),('p037','mochila con arnes','seguridad',11,215,'rosa','13 cm','sintetico','Nilla'),('p038','mochila con arnes','seguridad',22,215,'verde','13 cm','sintetico','Nilla'),('p039','mochila con arnes','seguridad',10,215,'rojo','13 cm','sintetico','Nilla'),('p040','chip localizador','seguridad',34,218,'azul','5 cm','plastico sintetico','Pflyn'),('p041','etiqueta de identificacion','seguridad',24,299,'gris','3.5 cm','acero inoxidable','Beirui'),('p042','Cepillo de dientes + dentifrico','higiene',12,250,'verde','10 cm','silicon alimenticio','Trixie'),('p043','plato alto','accesorios para alimentos',32,250,'plata','22 cm','acero inoxidable','One'),('p044','asiento premium de coche','seguridad',11,799,'negro','70 cm','velcro','Njnj'),('p045','asiento premium de coche','seguridad',21,799,'negro','130 cm','velcro','Njnj'),('p046','placa de identificacion','seguridad',13,299,'plata','12 cm','sintetico','Beirui');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-04  7:50:38
