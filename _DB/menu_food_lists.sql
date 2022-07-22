-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: menu
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `food_lists`
--

DROP TABLE IF EXISTS `food_lists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_lists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shop_id` int unsigned NOT NULL DEFAULT '9999',
  `name` varchar(20) NOT NULL,
  `price` int NOT NULL,
  `img_src` varchar(200) DEFAULT '/imgs/errer/300x200',
  `desc` varchar(400) DEFAULT '설명이 없습니다',
  `food_type` int NOT NULL DEFAULT '0',
  `isbest` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_lists`
--

LOCK TABLES `food_lists` WRITE;
/*!40000 ALTER TABLE `food_lists` DISABLE KEYS */;
INSERT INTO `food_lists` VALUES (1,1001,'육회비빔밥',5500,'/imgs/haksik/hak/2','세종대 대표메뉴!',1,1),(2,1002,'순쫄',4500,'/imgs/haksik/jin/2','맛 변동성이 있다.',2,1),(3,1001,'냉모밀',3800,'/imgs/errer/300x200','무난한 프랜차이즈맛을 가성비있고 시원하게!',3,0),(4,1001,'소금구이덮밥',4200,'/imgs/haksik/hak/1','이만한 퀄리티의 소금구이를 싼 가격에 즐길 수 있다!',1,1),(5,1001,'닭강정',3000,'/imgs/haksik/hak/3','무난하게 곁들여 먹을수 있는 닭강정!',4,1),(6,1002,'크림치즈도리아',5500,'/imgs/errer/300x200','가성비로 즐기는 크림치즈도리아',1,1),(7,1002,'김치찌게라면',3000,'/imgs/errer/300x200','얼큰해서 해장도 가능하다',3,1),(8,2001,'라돈모다기',8500,'/imgs/restaurant/yamsem/1','라면,돈까스,계란김밥이 한접시에!',4,1),(9,2001,'돈까스김치오므라이스',8500,'/imgs/restaurant/yamsem/2','설명이 없습니다',4,1),(10,2001,'얌샘김밥',3200,'/imgs/restaurant/yamsem/3','설명이 없습니다',1,1);
/*!40000 ALTER TABLE `food_lists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-22 23:02:00
