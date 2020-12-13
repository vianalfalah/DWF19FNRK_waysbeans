-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2020 at 02:40 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `waysbeans-vian`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `tittle` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `stock`, `photo`, `createdAt`, `updatedAt`) VALUES
(1, 'Guatemala Beans', 200000, 'Ini Kopi Guatemala', 500, '1607227781428-guatemala-beans.png', '2020-12-06 04:09:41', '2020-12-06 04:09:41'),
(2, 'NICARAGUA Beans', 500000, 'Ini Kopi Nicaragua', 350, '1607227858946-nicaragua-beans.png', '2020-12-06 04:10:59', '2020-12-06 04:27:41'),
(3, 'Rwanda Beans', 300000, 'Ini Kopi Rwanda', 250, '1607227903459-rwanda-beans.png', '2020-12-06 04:11:43', '2020-12-06 04:11:43'),
(4, 'Ethiopia Beans', 400000, 'Ini Kopi Ethiopia', 150, '1607227952608-ethiopia-beans.png', '2020-12-06 04:12:32', '2020-12-06 04:12:32');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` int(11) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `photo`, `isAdmin`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20201202095337-create-post.js'),
('20201202202628-create-user.js'),
('20201203213943-create-transaction.js'),
('20201204075159-create-product.js'),
('20201204081147-create-trans-to-prod.js'),
('20201210073513-create-profile.js');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pos` int(11) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `userID`, `name`, `email`, `pos`, `phone`, `address`, `attachment`, `status`, `createdAt`, `updatedAt`) VALUES
(2, 1, 'Vian Alfalah', 'vianalfalah248@gmail.com', 16431, '08967878', 'Depok PancoranMas', NULL, 'On The Way', '2020-12-12 05:29:39', '2020-12-12 06:33:26');

-- --------------------------------------------------------

--
-- Table structure for table `transtoprods`
--

CREATE TABLE `transtoprods` (
  `id` int(11) NOT NULL,
  `transID` int(11) NOT NULL,
  `prodID` int(11) NOT NULL,
  `orderQuantity` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transtoprods`
--

INSERT INTO `transtoprods` (`id`, `transID`, `prodID`, `orderQuantity`, `createdAt`, `updatedAt`) VALUES
(11, 2, 1, 2, '2020-12-12 05:29:39', '2020-12-12 05:29:39'),
(12, 2, 3, 1, '2020-12-12 05:29:39', '2020-12-12 05:29:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Vian Alfalah', 'vianalfalah248@gmail.com', '$2b$08$x8UwuHBi4Wc3KK2g35YlCOKkAoUPWBT8oxPj4VmeeWasMVrgQvg7m', '2020-12-05 12:15:22', '2020-12-05 12:15:22', '0000-00-00 00:00:00'),
(2, 'vianfardo', 'user@user.com', '$2b$10$aoRMc1.tYLRbUAe5TivhC.p558b7VUz7EJQdmleGql9DRGMbTDJTC', '2020-12-12 12:45:48', '2020-12-12 12:45:48', '0000-00-00 00:00:00'),
(3, 'viana123', 'user1@gmail.com', '$2b$10$OsjR8IyxW/TXxIEz/tHzEeWr96n1WEAx1P8KmUNuwg/VoZ0EqPX7q', '2020-12-12 12:52:10', '2020-12-12 12:52:10', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `transtoprods`
--
ALTER TABLE `transtoprods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transID` (`transID`),
  ADD KEY `prodID` (`prodID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `transtoprods`
--
ALTER TABLE `transtoprods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `profiles_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transtoprods`
--
ALTER TABLE `transtoprods`
  ADD CONSTRAINT `transtoprods_ibfk_1` FOREIGN KEY (`transID`) REFERENCES `transactions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transtoprods_ibfk_2` FOREIGN KEY (`prodID`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
