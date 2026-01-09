-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: cardekho
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `role` varchar(225) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `header_menu`
--

DROP TABLE IF EXISTS `header_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `header_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) DEFAULT '#link',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `header_menu`
--

LOCK TABLES `header_menu` WRITE;
/*!40000 ALTER TABLE `header_menu` DISABLE KEYS */;
INSERT INTO `header_menu` VALUES (3,'Abouts','http://localhost/unbundl/admin/#http://localhost/unbundl/admin/#http://localhost/unbundl/admin/#abouts'),(8,'Menu','/menu'),(9,'Home','/'),(10,'About','/about'),(11,'contact-us','/contact-us');
/*!40000 ALTER TABLE `header_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hero_section`
--

DROP TABLE IF EXISTS `hero_section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hero_section` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hero_section`
--

LOCK TABLES `hero_section` WRITE;
/*!40000 ALTER TABLE `hero_section` DISABLE KEYS */;
INSERT INTO `hero_section` VALUES (1,'https://images.pexels.com/photos/38570/lamborghini-car-speed-prestige-38570.jpeg');
/*!40000 ALTER TABLE `hero_section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mostsearchedcars`
--

DROP TABLE IF EXISTS `mostsearchedcars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mostsearchedcars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `carid` int(11) NOT NULL,
  `searchedcount` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mostsearchedcars`
--

LOCK TABLES `mostsearchedcars` WRITE;
/*!40000 ALTER TABLE `mostsearchedcars` DISABLE KEYS */;
/*!40000 ALTER TABLE `mostsearchedcars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(225) NOT NULL,
  `name` text NOT NULL,
  `price` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `searchcount` int(11) DEFAULT 0,
  `createdat` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedat` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'suv','Tata','1','https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(2,'suv','Mercedez Benz Amg','60','https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg',4,'2026-01-06 11:49:10','2026-01-09 08:35:05'),(3,'suv','Tata','2','https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(4,'suv','White Mercedes Benz ','93','https://images.pexels.com/photos/8673535/pexels-photo-8673535.jpeg',6,'2026-01-06 11:49:10','2026-01-09 08:50:15'),(5,'suv','Tata','31','https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(6,'suv','Tata','1','https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(7,'suv','Tata','13','https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',1,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(8,'suv','Tata','1','https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(9,'hatchback','Maruti Baleno','3','https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(10,'hatchback','Maruti Baleno','44','https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(11,'hatchback','Maruti Baleno','3','https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(12,'hatchback','Maruti Baleno','36','https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(13,'hatchback','Maruti Baleno','3','https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg',6,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(14,'hatchback','Maruti Baleno','39','https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(15,'hatchback','Maruti Baleno','3','https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(16,'hatchback','Maruti Baleno','34','https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(17,'hatchback','Maruti Baleno','30','https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(18,'hatchback','Maruti Baleno','3','https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(19,'hatchback','Maruti Baleno','33','https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10492/1755851821713/front-left-side-47.jpg',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(20,'sedan','BMW M5','78','https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/M5/11821/1762779160108/front-left-side-47.jpg?tr=w-300',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(21,'sedan','Gray Mercedez Benz','90','https://images.pexels.com/photos/193021/pexels-photo-193021.jpeg',0,'2026-01-06 11:49:10','2026-01-09 08:54:30'),(22,'sedan','A Red Mercedes-Benz GT S','96','https://images.pexels.com/photos/17590508/pexels-photo-17590508.jpeg',0,'2026-01-06 11:49:10','2026-01-09 08:50:54'),(23,'sedan','White GAZ-24','80','https://images.pexels.com/photos/17000739/pexels-photo-17000739.jpeg',0,'2026-01-06 11:49:10','2026-01-09 08:53:02'),(24,'sedan','Camera R4','86','https://images.pexels.com/photos/253096/pexels-photo-253096.jpeg',3,'2026-01-06 11:49:10','2026-01-09 08:52:28'),(25,'sedan','BMW M5','64','https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/M5/11821/1762779160108/front-left-side-47.jpg?tr=w-300',0,'2026-01-06 11:49:10','2026-01-06 11:49:10'),(26,'sedan','Red Mercedes AMG GT','98','https://images.pexels.com/photos/17623961/pexels-photo-17623961.jpeg',0,'2026-01-06 11:49:10','2026-01-09 08:51:34'),(27,'sedan','A Classic Mercedes Benz','66','https://images.pexels.com/photos/13290601/pexels-photo-13290601.jpeg',0,'2026-01-06 11:49:10','2026-01-09 08:53:46'),(28,'Hatchback','Mercedes-benz 5-door','68','https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg',0,'2026-01-06 11:49:10','2026-01-09 08:39:58'),(29,'sedan','BMW M5','44','https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/M5/11821/1762779160108/front-left-side-47.jpg?tr=w-300',0,'2026-01-06 11:49:10','2026-01-06 11:49:10');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(225) NOT NULL,
  `phone` varchar(225) DEFAULT NULL,
  `email` varchar(225) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `category` text DEFAULT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','09667639464','satyam88472gupta@gmail.com','New delhi',NULL,'2026-01-07 07:19:40','2026-01-07 07:19:40'),(2,'admin','09667639464','satyam88472gupta@gmail.com','New delhi',NULL,'2026-01-07 07:20:34','2026-01-07 07:20:34'),(3,'admin','09667639464','satyam88472gupta@gmail.com','New delhi','Array','2026-01-07 07:20:45','2026-01-07 07:20:45'),(4,'admin','09667639464','satyam88472gupta@gmail.com','New delhi','Array','2026-01-07 07:24:00','2026-01-07 07:24:00'),(5,'admin','09667639464','satyam88472gupta@gmail.com','New delhi','1,2,3','2026-01-07 07:42:03','2026-01-07 07:42:03'),(6,'satyam11','09667639464','satyamgupta@gmail.com','New delhi','2,5,8,11','2026-01-07 07:48:18','2026-01-07 07:48:18');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userdata`
--

DROP TABLE IF EXISTS `userdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userdata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdata`
--

LOCK TABLES `userdata` WRITE;
/*!40000 ALTER TABLE `userdata` DISABLE KEYS */;
INSERT INTO `userdata` VALUES (1,'admin','admin@gmail.com','$2y$10$QjkDUJvWX9ydQbY343BKoOLtlEmrbo/Nw7biN5AG04PSd8/8oflxu');
/*!40000 ALTER TABLE `userdata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-01-09 20:19:46
