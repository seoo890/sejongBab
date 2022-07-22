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
-- Table structure for table `shop_lists`
--

DROP TABLE IF EXISTS `shop_lists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop_lists` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `img_src` varchar(1000) NOT NULL DEFAULT '/imgs/errer/300x200',
  `location` varchar(1000) DEFAULT '주소 준비중',
  `notice` varchar(400) NOT NULL DEFAULT '공지가 없습니다.',
  `opening_hour` varchar(200) NOT NULL DEFAULT '평일 : 09:00~19:00',
  `desc` varchar(200) NOT NULL DEFAULT '설명이 없습니다.',
  `location_desc` varchar(100) NOT NULL DEFAULT '업데이트 예정입니다.',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_lists`
--

LOCK TABLES `shop_lists` WRITE;
/*!40000 ALTER TABLE `shop_lists` DISABLE KEYS */;
INSERT INTO `shop_lists` VALUES (1001,'학생회관','/imgs/haksik/hak','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1229.958861064056!2d127.07404430105673!3d37.549896485871685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4da7f82fb11%3A0x52b608ac2f72d6e6!2z7ISc7Jq47Yq567OE7IucIOq1sOyekOuPmSDshLjsooXrjIDtlZnqtZAg7ZWZ7IOd7ZqM6rSA!5e0!3m2!1sko!2skr!4v1654101961182!5m2!1sko!2skr','사람이 매우 많이 몰리는 12:00~13:30에는 차라리 진관을 가자','평일 : 09:00~19:00','세종대의 대표 맛집!','학생회관 지하 1층'),(1002,'진관홀','/imgs/haksik/jin','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.7944346168179!2d127.07274682699499!3d37.550876032783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4d012339f67%3A0x10b9ea79991ca27f!2z7ISc7Jq47Yq567OE7IucIOq1sOyekOuPmSDshLjsooXrjIDtlZnqtZAg7KeE6rSA7ZmA!5e0!3m2!1sko!2skr!4v1654507602318!5m2!1sko!2skr','영업시간이 짧다! 아침과 점심만 해결 가능한 식당이다','평일 : 09:30~15:30','숨겨진 학식맛집','진관홀 지하 1층'),(2001,'얌샘김밥','/imgs/restaurant/yamsem','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1229.958861064056!2d127.07404430105673!3d37.549896485871685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4da7f82fb11%3A0x52b608ac2f72d6e6!2z7ISc7Jq47Yq567OE7IucIOq1sOyekOuPmSDshLjsooXrjIDtlZnqtZAg7ZWZ7IOd7ZqM6rSA!5e0!3m2!1sko!2skr!4v1654101961182!5m2!1sko!2skr','공지가 없습니다.','매일 : 09:00~21:00','접근성이 가장 좋은 분식집!','학생회관 1층'),(2002,'미스사이공','/imgs/restaurant/saigong','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1229.958861064056!2d127.07404430105673!3d37.549896485871685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4da7f82fb11%3A0x52b608ac2f72d6e6!2z7ISc7Jq47Yq567OE7IucIOq1sOyekOuPmSDshLjsooXrjIDtlZnqtZAg7ZWZ7IOd7ZqM6rSA!5e0!3m2!1sko!2skr!4v1654101961182!5m2!1sko!2skr','','매일 : 10:00~21:00','학식이 가끔 질릴때 갈만하다','학생회관 1층'),(3001,'판도로시','/imgs/cafe/pandorosi','주소 준비중','공지가 없습니다.','평일 : 09:00~19:00','설명이 없습니다.','업데이트 예정입니다.'),(3002,'투썸플래이스','/imgs/cafe/twosome','주소 준비중','공지가 없습니다.','평일 : 09:00~19:00','설명이 없습니다.','업데이트 예정입니다.'),(3003,'카페딕셔너리','/imgs/cafe/dic','주소 준비중','공지가 없습니다.','평일 : 09:00~19:00','설명이 없습니다.','업데이트 예정입니다.'),(3004,'파리바게뜨','/imgs/cafe/paris','주소 준비중','공지가 없습니다.','평일 : 09:00~19:00','설명이 없습니다.','업데이트 예정입니다.'),(3005,'제주몰빵','/imgs/cafe/jeju','주소 준비중','공지가 없습니다.','평일 : 09:00~19:00','설명이 없습니다.','업데이트 예정입니다.');
/*!40000 ALTER TABLE `shop_lists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-22 23:01:59
