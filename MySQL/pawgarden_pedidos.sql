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
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `idPedido` int NOT NULL AUTO_INCREMENT,
  `id_Usuario` varchar(100) DEFAULT NULL,
  `idProducto` varchar(100) DEFAULT NULL,
  `estatus` int DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `direccionEnvio` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idPedido`),
  KEY `idProducto_idx` (`idProducto`),
  KEY `idUsuario_idx` (`id_Usuario`),
  CONSTRAINT `id_Usuario` FOREIGN KEY (`id_Usuario`) REFERENCES `usuario` (`idUsuario`),
  CONSTRAINT `idProducto` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`idProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'c001','p001',1,3,NULL,'monte casino no.19 jesús del monte'),(3,'c002','p002',2,1,'2021-05-03','Xmiltepec no.6 mesa lo hornos'),(4,'c003','p006',2,1,'2021-05-03','Gibraltar no.4 Polanco'),(5,'c004','p009',1,1,'2021-05-04','Pinos no.3 Satélite'),(6,'c005','p011',4,1,'2021-05-04','monte negro no.16 Huixquilucan'),(8,'c008','p013',1,2,'2021-05-04','monte negro no.16 Huixquilucan'),(9,'c009','p014',1,6,'2021-05-04','privada del ensueño no.56 Huixquilucan'),(10,'c010','p017',1,2,'2021-05-04','coahuila no.71 Cuahutemoc'),(11,'c011','p018',3,1,'2021-05-04','plan de Guadalupe no.25 Alvaro Obregon'),(12,'c018','p018',1,1,'2021-05-04','plan de Guadalupe no.25 Alvaro Obregon'),(13,'c017','p019',1,3,'2021-05-04','andador 6 no.4 olimpica radio');
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
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
