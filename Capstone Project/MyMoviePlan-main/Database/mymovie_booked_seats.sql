-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: mymovie
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `booked_seats`
--

DROP TABLE IF EXISTS `booked_seats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booked_seats` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `seat` varchar(255) DEFAULT NULL,
  `show_id` bigint DEFAULT NULL,
  `theater_id` bigint DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `theater` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbd4ee3cw0m5tv5lhy65oa3v6y` (`theater`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booked_seats`
--

LOCK TABLES `booked_seats` WRITE;
/*!40000 ALTER TABLE `booked_seats` DISABLE KEYS */;
INSERT INTO `booked_seats` VALUES (1,' F5 ',NULL,NULL,'2021-04-24 05:30:00','01:00 PM (Matnee)',1),(2,' G6 ',NULL,NULL,'2021-04-24 05:30:00','01:00 PM (Matnee)',1),(3,' E6 ',NULL,NULL,'2021-04-15 05:30:00','08:00 PM (Night)',4),(4,' C3 ',NULL,NULL,'2021-04-15 05:30:00','08:00 PM (Night)',4),(5,' G4 ',NULL,NULL,'2021-04-24 05:30:00','01:00 PM (Matnee)',1),(6,' H2 ',NULL,NULL,'2021-04-24 05:30:00','01:00 PM (Matnee)',1),(7,' E6 ',NULL,NULL,'2021-04-22 05:30:00','10:00 AM (Morning)',1),(8,' E3 ',NULL,NULL,'2021-04-22 05:30:00','10:00 AM (Morning)',1),(9,' F6 ',NULL,NULL,'2021-04-29 05:30:00','01:00 PM (Matnee)',3),(10,' F8 ',NULL,NULL,'2021-04-29 05:30:00','01:00 PM (Matnee)',3),(11,' F10 ',NULL,NULL,'2021-04-29 05:30:00','01:00 PM (Matnee)',3),(12,' F1 ',NULL,NULL,'2021-04-29 05:30:00','01:00 PM (Matnee)',3),(13,' C2 ',NULL,NULL,'2021-04-02 05:30:00','04:00 PM (Evening)',1),(14,' C4 ',NULL,NULL,'2021-04-02 05:30:00','04:00 PM (Evening)',1);
/*!40000 ALTER TABLE `booked_seats` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-26 19:26:36
