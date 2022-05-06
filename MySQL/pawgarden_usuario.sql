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
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` varchar(100) NOT NULL,
  `nombre` varchar(24) DEFAULT NULL,
  `apellido1` varchar(24) DEFAULT NULL,
  `apellido2` varchar(20) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `telefono` bigint DEFAULT NULL,
  `direccion` text,
  `contrasena` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('c001','Federico','Hernandez','Martinez','Fedehm@gmail.com',5556689032,'calle San Jacinto col. Mirador no. 2','PatitoFeliz1'),('c002','Pedro','Jones','Garcia','pedrojones@gmail.com',5557559087,'avenida Javier Mina col. Quimicos no. 963','Pe2012'),('c003','Jose','Perez','Sanchez','Jperez@hotmail.com',5523879809,'calle Astrofisicos col. San Francisco no. 458','Hapiness12'),('c004','Dana','Rodriguez','Diaz','danadriguez@gmail.com',5546783498,'avenida Gomez de Mendiola col. Astro no. 3125','MuseF1'),('c005','Samuel','Jimenez','Torres','SamTorres@hotmail.com2326889712',4490436623,'calle Independencia col. Libertad no.24','AABB20'),('c006','Alissa','Aleman','Juarez','alissa_aleman@gmail.com',2229666244,'calle Olmos col. Ejercito Nacional no. 99','2022FELIZ'),('c007','Luisa','Reyes','Baez','luisa.reyes@gmail.com',5545678590,'calle Dependencia col. Foraneos no. 771','Estupendo12'),('c008','Mauricio','Torres','Dominguez','Mautorres.d@gmail.com',5634562378,'privada Libertad col. San Andres no. 1235','WorldIsEnding1'),('c009','Fernanda','Aguilar','Santos','fernanda_aguilar22@gmail.com',5643567823,'calle Medrano col. Zaragoza no. 442','Bakito89'),('c010','Rodolfo','Senteno','Gimenez','rodo_se_gi@hotmail.com',5545897602,'calle R Michelle col. Blanco no. 887','FeliFeli1'),('c011','Claudia','Buendia','Urrutia','claudia.buendia@gmail.com',5545321670,'avenida Presa de Osorio col. El Porvenir no. 2700','Sadness1'),('c013','Daniela','Sanchez','Keller','danykeller@hotmail.com',5543789024,'calle Jardines de Babilonia col. La Florida no. 3454','Mama897'),('c014','Rodrigo','Miranda','Lopez','rodrigo_miranda@hotmail.es',5578904523,'calle 2 de Julio col. Heroes de Mexico, no. 22','MM5154578'),('c015','Ester','Batista','Ribeiro','ester.batista@gmail.com',5523184422,'calle Rio de Janeiro col. America no. 16','BatiBati1'),('c016','Hanna','GarrcÃ­a','Lopez','hani.garrci@gmail.com',5528184427,'avenida Presa Laural col. Jardines no. 56','SonricSs1'),('c017','Harry','Styles','Gomez','harry.estilos@hotmail.es',3328187429,'calle RÃ­os col. Ricitos no. 1','OneDirection1'),('c018','Maria ','Barrio','Montes','marica_mo12@gmail.com',4456783245,'calle Rodolfo Nery Vela Col. Gustavo A. madero no. 455','Maria199712'),('c019','Roberto','Gomez ','Reyes','rore.rore@hotmail.com',5568492067,'avenida profesiones Col. alta tension no. 67','ROgomes0'),('c020','Carla','Montiel','Solis','solosolis@gmail.com',5679805043,'calle victoria col. flores gomez no. 4','SOLISc26');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
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
