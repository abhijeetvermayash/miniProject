-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.17

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
-- Table structure for table `aprroved`
--

DROP TABLE IF EXISTS `aprroved`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aprroved` (
  `prod_id` char(200) DEFAULT NULL,
  KEY `prod_id` (`prod_id`),
  CONSTRAINT `aprroved_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `products` (`prod_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aprroved`
--

LOCK TABLES `aprroved` WRITE;
/*!40000 ALTER TABLE `aprroved` DISABLE KEYS */;
INSERT INTO `aprroved` VALUES ('46351273469de2b9f38ad1aee0dfe8e1'),('46351273469de2b9f38ad1aee0dfe8e1');
/*!40000 ALTER TABLE `aprroved` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area` (
  `addr` char(100) DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `state` char(15) DEFAULT NULL,
  `city` char(20) DEFAULT NULL,
  `user_id` char(200) DEFAULT NULL,
  KEY `user_id` (`user_id`),
  CONSTRAINT `area_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES ('sdjhsbdknsdkjnasd',65655,'sdsds','sdsdsds','ea3b05c2675f0a5a19d08db0b75bd1b3'),('sdjhsbdknsdkjnasd',65655,'sdsds','sdsdsds','c8673e0faedf384e598ae5440fcf220e'),('sdjhsbdknsdkjnasd',65655,'sdsds','sdsdsds','058e887e9fdd257584daa089a4526a35'),('india,bihar,nalanda,rajgir,bangali para,suina bhavan',803116,'Bihar','rajgir','327f1c298c15a93976d47db250bbdfed'),('1BI18CS004',800020,'Bihar','PATNA','ea8fb940dafbe029b8661102f60c1159'),('Address',800020,'Bihar','patna','627fa3f4a6f6294f54681199a29b2fc9'),('patna',800020,'Bihar','PATNA','b1ab26183ddba276e0929bd7cde03f50'),('patna',800020,'Bihar','PATNA','01356eed14f5a972377bdab6ce326c29');
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `cat_id` char(200) NOT NULL,
  `cat_name` char(100) DEFAULT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES ('1','Books'),('2','Cloths'),('3','Electronic'),('4','Musical Instrument');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deal`
--

DROP TABLE IF EXISTS `deal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deal` (
  `buyer_id` char(200) DEFAULT NULL,
  `prod_id` char(200) DEFAULT NULL,
  `status` char(50) DEFAULT 'pending',
  `date` date DEFAULT NULL,
  `deal_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`deal_id`),
  KEY `buyer_id` (`buyer_id`),
  KEY `prod_id` (`prod_id`),
  CONSTRAINT `deal_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `deal_ibfk_2` FOREIGN KEY (`prod_id`) REFERENCES `products` (`prod_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deal`
--

LOCK TABLES `deal` WRITE;
/*!40000 ALTER TABLE `deal` DISABLE KEYS */;
INSERT INTO `deal` VALUES ('b1ab26183ddba276e0929bd7cde03f50','083bd61ad5774fd351ecef2a4600a620','approved','2020-12-11',102),('b1ab26183ddba276e0929bd7cde03f50','083bd61ad5774fd351ecef2a4600a620','approved','2020-12-11',103),('b1ab26183ddba276e0929bd7cde03f50','083bd61ad5774fd351ecef2a4600a620','approved','2020-12-11',104),('b1ab26183ddba276e0929bd7cde03f50','083bd61ad5774fd351ecef2a4600a620','approved','2020-12-11',105),('b1ab26183ddba276e0929bd7cde03f50','083bd61ad5774fd351ecef2a4600a620','approved','2020-12-11',106);
/*!40000 ALTER TABLE `deal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `seller_id` char(200) NOT NULL,
  `buyer_id` char(200) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`seller_id`,`buyer_id`),
  KEY `seller_id` (`seller_id`),
  KEY `buyer_id` (`buyer_id`),
  CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`buyer_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `prod_id` char(200) NOT NULL,
  `prod_title` char(100) DEFAULT NULL,
  `prod_desc` varchar(500) DEFAULT NULL,
  `prod_img` varchar(300) DEFAULT NULL,
  `seller_id` char(200) DEFAULT NULL,
  `category` char(200) DEFAULT NULL,
  `prod_price` int(11) DEFAULT NULL,
  `status` char(200) DEFAULT 'pending',
  `subcat` char(15) DEFAULT NULL,
  `reason` char(100) DEFAULT NULL,
  PRIMARY KEY (`prod_id`),
  KEY `seller_id` (`seller_id`),
  KEY `category` (`category`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`category`) REFERENCES `category` (`cat_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('083bd61ad5774fd351ecef2a4600a620','Computer Networks book','Computer Neworking book ','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/backdrop-1920_1606719221147.jpg?alt=media','ea8fb940dafbe029b8661102f60c1159','1',23,'approved','sem5',NULL),('0a29407b8d7eaf5a3ebcd22467bb07eb','dasdada','dd','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Abhijeet_1606664900954.jpg?alt=media','ea8fb940dafbe029b8661102f60c1159','1',12,'approved','sem1',NULL),('0d1aa69a7a40ad0aaa4d3d978a5de50d','Iron','iron for ironing cloths','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Untitled_1606723921669.png?alt=media','ea8fb940dafbe029b8661102f60c1159','3',300,'approved','utensils',NULL),('22f1786372b39e10ea094e35c6872b5f','dasdasd','dassdad','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Abhijeet_1606664824197.jpg?alt=media','ea8fb940dafbe029b8661102f60c1159','1',23,'approved','sem1',NULL),('27d928fe8fcde09c746a39507a233449','check','dasdad','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Screenshot%202020-12-11%20140226_1607689577522.jpg?alt=media','b1ab26183ddba276e0929bd7cde03f50','1',20,'declined','sem1','cost is too much'),('46351273469de2b9f38ad1aee0dfe8e1','Guitar','Acoustic Guitar','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/XWx75m7_1606720016224.jpg?alt=media','ea8fb940dafbe029b8661102f60c1159','4',5000,'approved','guitar',NULL),('62030d62e5ccab956551c79f1cb7727c','harmonium','harmoniumdasdasd','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Abhijeet_1607491313000.jpg?alt=media','b1ab26183ddba276e0929bd7cde03f50','4',300,'approved','sem1',NULL),('8079852530a597a33dfe6f2fcf96f3ba','acostic guitar','dadad','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Abhijeet_1607491504586.jpg?alt=media','b1ab26183ddba276e0929bd7cde03f50','4',20,'declined','sem1','please reduce your rate'),('9b58521cc38993e2e014088736eb6355','Kakhi cloth','Bekar purana cloth','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Death-Note-Wallpaper-Best-Collection_1605548570213.jpeg?alt=media','c8673e0faedf384e598ae5440fcf220e','2',500,'approved','Kakhi',NULL),('c59f49aa78660f661bbb49213a84ec6b','tabla','tabla','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Paris-Wallpaper-background-21_1606720260004.jpg?alt=media','ea8fb940dafbe029b8661102f60c1159','4',5021,'approved','tabla',NULL),('cc9f733dcbfd383b304d97f00b540493','tub','dasdasdad','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Screenshot%202020-12-11%20140226_1607689343932.jpg?alt=media','b1ab26183ddba276e0929bd7cde03f50','3',59,'declined','utensils','Not satisfactory'),('efec5f3526526e28d53c0dd982518e3b','Phone','dasdsdadasdadad','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Abhijeet_1607517775118.jpg?alt=media','b1ab26183ddba276e0929bd7cde03f50','3',3400,'approved','phones',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `approve` AFTER INSERT ON `products` FOR EACH ROW insert into aprroved values(new.prod_id) */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `prod_update` AFTER UPDATE ON `products` FOR EACH ROW insert into aprroved values(new.prod_id) */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `sub_category`
--

DROP TABLE IF EXISTS `sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_category` (
  `subct_name` char(50) DEFAULT NULL,
  `description` char(200) DEFAULT NULL,
  `category_id` char(200) NOT NULL,
  KEY `category_id` (`category_id`),
  CONSTRAINT `sub_category_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_category`
--

LOCK TABLES `sub_category` WRITE;
/*!40000 ALTER TABLE `sub_category` DISABLE KEYS */;
INSERT INTO `sub_category` VALUES ('sem1','Books for semenster 1','1'),('sem2','Books for semenster 2','1'),('sem3','Books for semenster 3','1'),('sem4','Books for semenster 4','1'),('sem5','Books for semenster 5','1'),('sem6','Books for semenster 6','1'),('sem7','Books for semenster 7','1'),('sem8','Books for semenster 8','1'),('Kakhi','lab dress','2'),('casual','casual dress','2'),('laptops','','3'),('calculator','','3'),('phones','','3'),('sound','','3'),('utensils',' products like iron,kettle,induction etc.','3'),('guitar','','4'),('flute','','4'),('casio','','4'),('tabla','','4'),('drums','','4');
/*!40000 ALTER TABLE `sub_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testtrigger2`
--

DROP TABLE IF EXISTS `testtrigger2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testtrigger2` (
  `TestTriggerID` int(11) NOT NULL,
  `Hashed` char(100) DEFAULT NULL,
  `PasswordProxy` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testtrigger2`
--

LOCK TABLES `testtrigger2` WRITE;
/*!40000 ALTER TABLE `testtrigger2` DISABLE KEYS */;
INSERT INTO `testtrigger2` VALUES (1,'d76f3d05cc9ac98f1f9160274a39fe33','');
/*!40000 ALTER TABLE `testtrigger2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` char(200) NOT NULL,
  `name` char(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` blob,
  `role` char(10) DEFAULT NULL,
  `dp` varchar(500) DEFAULT NULL,
  `contact_no` char(12) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('01356eed14f5a972377bdab6ce326c29','verma','mynameisyashabhi@gmail.com',_binary '\”\«q–è\ÂGâ\”˝∏ü,ÑT','user','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Abhijeet_1606824652440.jpg?alt=media','8579081636'),('058e887e9fdd257584daa089a4526a35','asas','ab@gmail.com',_binary ']qø\œ{Qä˙ì‹òµèHßª','user','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/1_1605548766586.PNG?alt=media','49594'),('327f1c298c15a93976d47db250bbdfed','Ankur Kumar JHA','ankur.ankurjha.jha@gmail.com',_binary '–õtR\·.ízU¶®\r\¬\Ô','user','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/32_AashutoshKumarJha_1606650078228.jpg?alt=media','7372037628'),('627fa3f4a6f6294f54681199a29b2fc9','yash','yash@gmail.com',_binary '\”\«q–è\ÂGâ\”˝∏ü,ÑT','user','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Abhijeet_1606724600144.jpg?alt=media','8579081636'),('b1ab26183ddba276e0929bd7cde03f50','yash','jeetabhijeet18@gmail.com',_binary '\”\«q–è\ÂGâ\”˝∏ü,ÑT','user','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Abhijeet_1606817840384.jpg?alt=media','8789788710'),('c8673e0faedf384e598ae5440fcf220e','abhi','abhiu@gmail.com',_binary ']qø\œ{Qä˙ì‹òµèHßª','user','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/1_1605435927672.PNG?alt=media','49594'),('ea3b05c2675f0a5a19d08db0b75bd1b3','aashu','nodemcu7138@gmail.com',_binary ']qø\œ{Qä˙ì‹òµèHßª','user','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/1_1605435592282.PNG?alt=media','49594'),('ea8fb940dafbe029b8661102f60c1159','abhijeet','abhijeetvermayash@gmail.com',_binary '\”\«q–è\ÂGâ\”˝∏ü,ÑT','admin','https://firebasestorage.googleapis.com/v0/b/miniproject-732ae.appspot.com/o/Abhijeet_1606663352410.jpg?alt=media','8579081636');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `hash` BEFORE INSERT ON `users` FOR EACH ROW set new.password =AES_ENCRYPT(new.password,'dbms mini project') */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Dumping events for database 'project'
--

--
-- Dumping routines for database 'project'
--
/*!50003 DROP FUNCTION IF EXISTS `getPass` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `getPass`( id char(100)) RETURNS char(100) CHARSET utf8mb4
BEGIN
	declare pass blob;
    declare r char(100);
	 select password into pass from users where user_id=id;
     select CAST(AES_DECRYPT(pass,'dbms mini project') AS CHAR) into r;
     return r;
     
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getPassbyEmail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `getPassbyEmail`( emailid char(120)) RETURNS char(100) CHARSET utf8mb4
BEGIN
	declare pass blob;
    declare r char(100);
	 select password into pass from users where email=emailid;
     select CAST(AES_DECRYPT(pass,'dbms mini project') AS CHAR) into r;
     return r;
     
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getPass` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getPass`(IN id CHAR(200) )
BEGIN
	select getPass(id);
     
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-11 19:07:25
