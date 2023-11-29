-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 24, 2023 at 10:22 AM
-- Server version: 10.6.12-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iskcon_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `AudioChants`
--

CREATE TABLE `AudioChants` (
  `Id` char(36) NOT NULL,
  `TenantId` char(36) DEFAULT NULL,
  `Audio` blob DEFAULT NULL,
  `Link` varchar(255) DEFAULT NULL,
  `ConcurrencyStamp` varchar(40) DEFAULT NULL,
  `CreationTime` datetime(6) DEFAULT NULL,
  `CreatorId` char(36) DEFAULT NULL,
  `LastModificationTime` datetime(6) DEFAULT NULL,
  `LastModifierId` char(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CalenderEvents`
--

CREATE TABLE `CalenderEvents` (
  `Id` char(36) NOT NULL,
  `TenantId` char(36) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `EventImage` blob DEFAULT NULL,
  `BannerImage` blob DEFAULT NULL,
  `Date` datetime(6) DEFAULT NULL,
  `HasDonation` tinyint(4) DEFAULT NULL,
  `HasSeva` tinyint(4) DEFAULT NULL,
  `DonationId` char(36) DEFAULT NULL,
  `SevaId` char(36) DEFAULT NULL,
  `ConcurrencyStamp` varchar(40) DEFAULT NULL,
  `CreationTime` datetime(6) DEFAULT NULL,
  `CreatorId` char(36) DEFAULT NULL,
  `LastModificationTime` datetime(6) DEFAULT NULL,
  `LastModifierId` char(36) DEFAULT NULL,
  `EventId` char(36) DEFAULT NULL,
  `HasEvent` tinyint(4) DEFAULT NULL,
  `HasSpotlight` tinyint(4) DEFAULT NULL,
  `SpotlightId` char(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Donations`
--

CREATE TABLE `Donations` (
  `Id` char(36) NOT NULL,
  `TenantId` char(36) DEFAULT NULL,
  `Name` longtext DEFAULT NULL,
  `Description` longtext DEFAULT NULL,
  `DonationImage` longblob DEFAULT NULL,
  `DonationImageBanner` longblob DEFAULT NULL,
  `Type` int(11) DEFAULT NULL,
  `MinAmount` double DEFAULT 0,
  `AmountType` int(11) DEFAULT NULL,
  `TargetAmount` double DEFAULT NULL,
  `Impact` double DEFAULT NULL,
  `StartDate` datetime(6) DEFAULT NULL,
  `EndDate` datetime(6) DEFAULT NULL,
  `AllowedCurrency` int(11) DEFAULT NULL,
  `CreationTime` datetime(6) DEFAULT NULL,
  `CreatorId` char(36) DEFAULT NULL,
  `LastModificationTime` datetime(6) DEFAULT NULL,
  `LastModifierId` char(36) DEFAULT NULL,
  `ActionType` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Donations`
--

INSERT INTO `Donations` (`Id`, `TenantId`, `Name`, `Description`, `DonationImage`, `DonationImageBanner`, `Type`, `MinAmount`, `AmountType`, `TargetAmount`, `Impact`, `StartDate`, `EndDate`, `AllowedCurrency`, `CreationTime`, `CreatorId`, `LastModificationTime`, `LastModifierId`, `ActionType`) VALUES
('1', 'tenant1', 'Donation 1', 'Description for Donation 1', NULL, NULL, 1, 10, 1, 100, 0, '2023-01-01 00:00:00.000000', '2023-02-01 00:00:00.000000', 1, '2023-01-01 12:00:00.000000', 'user1', '2023-01-01 12:30:00.000000', 'user2', 0),
('10', 'tenant2', 'Donation 10', 'Description for Donation 10', NULL, NULL, 2, 30, 2, 300, 0, '2023-10-01 00:00:00.000000', '2023-11-01 00:00:00.000000', 2, '2023-10-01 12:00:00.000000', 'user3', '2023-10-01 12:30:00.000000', 'user1', 0),
('2', 'tenant2', 'Donation 2', 'Description for Donation 2', NULL, NULL, 2, 20, 2, 200, 0, '2023-02-01 00:00:00.000000', '2023-03-01 00:00:00.000000', 2, '2023-02-01 12:00:00.000000', 'user2', '2023-02-01 12:30:00.000000', 'user3', 0),
('3', 'tenant1', 'Donation 3', 'Description for Donation 3', NULL, NULL, 1, 15, 1, 150, 0, '2023-03-01 00:00:00.000000', '2023-04-01 00:00:00.000000', 1, '2023-03-01 12:00:00.000000', 'user1', '2023-03-01 12:30:00.000000', 'user2', 0);

-- --------------------------------------------------------

--
-- Table structure for table `NestSecurityLogs`
--

CREATE TABLE `NestSecurityLogs` (
  `Id` char(36) NOT NULL,
  `TenantId` char(36) DEFAULT NULL,
  `ApplicationName` varchar(96) DEFAULT NULL,
  `Identity` varchar(96) DEFAULT NULL,
  `Action` varchar(96) DEFAULT NULL,
  `UserId` char(36) DEFAULT NULL,
  `UserName` varchar(256) DEFAULT NULL,
  `TenantName` varchar(64) DEFAULT NULL,
  `ClientId` varchar(64) DEFAULT NULL,
  `CorrelationId` varchar(64) DEFAULT NULL,
  `ClientIpAddress` varchar(64) DEFAULT NULL,
  `BrowserInfo` varchar(512) DEFAULT NULL,
  `CreationTime` datetime(6) DEFAULT NULL,
  `ExtraProperties` varchar(255) DEFAULT NULL,
  `ConcurrencyStamp` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `NestSecurityLogs`
--

INSERT INTO `NestSecurityLogs` (`Id`, `TenantId`, `ApplicationName`, `Identity`, `Action`, `UserId`, `UserName`, `TenantName`, `ClientId`, `CorrelationId`, `ClientIpAddress`, `BrowserInfo`, `CreationTime`, `ExtraProperties`, `ConcurrencyStamp`) VALUES
('09d70ca0-119b-4614-a16e-32945c1dd548', NULL, NULL, NULL, NULL, '99bcef1e-1446-462f-916d-274c3d6ff096', NULL, NULL, NULL, NULL, NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36', '2023-11-24 09:19:14.641000', NULL, NULL),
('22e32a4a-4217-4897-9d77-0966d69273d0', NULL, NULL, NULL, NULL, 'ce9ad6b0-62b8-4989-8b7f-fa0288c18c4f', NULL, NULL, NULL, NULL, NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36', '2023-11-22 12:50:43.891000', NULL, NULL),
('3b175cfb-e9a6-4a11-9ee3-aea3d4214162', NULL, NULL, NULL, NULL, '2c7739d4-922a-4728-b903-a8acebf77497', NULL, NULL, NULL, NULL, NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15', '2023-11-21 15:23:56.924000', NULL, NULL),
('3cfd3b25-caac-4090-bfc6-79e2bc02a933', NULL, NULL, NULL, NULL, 'a1aa4201-f338-4d3b-a094-395843835c50', NULL, NULL, NULL, NULL, NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15', '2023-11-22 11:59:14.686000', NULL, NULL),
('42cd1cdf-b7b7-432f-b96f-7c4fb75eda1e', NULL, NULL, NULL, NULL, '305f9c6e-5d64-4a80-89c5-6e6fff3ce520', NULL, NULL, NULL, NULL, NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15', '2023-11-24 08:18:38.588000', NULL, NULL),
('4a18b344-1582-4b7a-ae25-0280335f831e', NULL, NULL, NULL, NULL, '99bcef1e-1446-462f-916d-274c3d6ff096', NULL, NULL, NULL, NULL, NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36', '2023-11-24 09:14:42.421000', NULL, NULL),
('4d81d84c-9d1b-4cf2-9962-119d64a76c4d', NULL, NULL, NULL, NULL, 'fc479a71-edee-4bf5-9eef-e932c6ff8ba2', NULL, NULL, NULL, NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36', '2023-11-21 10:02:31.039000', NULL, NULL),
('71dcf76b-078e-48da-b2e0-012df2549ab1', NULL, NULL, NULL, NULL, '99bcef1e-1446-462f-916d-274c3d6ff096', NULL, NULL, NULL, NULL, NULL, 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1.1 Mobile/15E148 Safari/604.1', '2023-11-21 15:54:04.375000', NULL, NULL),
('a3f9169f-228b-4609-b94d-bd986d2a4d8f', NULL, NULL, NULL, NULL, '305f9c6e-5d64-4a80-89c5-6e6fff3ce520', NULL, NULL, NULL, NULL, NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36', '2023-11-24 09:29:00.444000', NULL, NULL),
('a8513178-4d9c-4620-81c0-fc277fb04d66', NULL, NULL, NULL, NULL, '99bcef1e-1446-462f-916d-274c3d6ff096', NULL, NULL, NULL, NULL, NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36', '2023-11-24 09:01:39.111000', NULL, NULL),
('bd6e82b8-29dc-41a3-9fde-62ae755a3430', NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36', '2023-11-21 07:15:22.461000', NULL, NULL),
('c7c06456-5ad6-4c2d-aa57-64861b00fd0f', NULL, NULL, NULL, NULL, '99bcef1e-1446-462f-916d-274c3d6ff096', NULL, NULL, NULL, NULL, NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36', '2023-11-24 08:33:30.289000', NULL, NULL),
('ff8c3371-32e2-487c-8e86-cf2412f3a94a', NULL, NULL, NULL, NULL, '305f9c6e-5d64-4a80-89c5-6e6fff3ce520', NULL, NULL, NULL, NULL, NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15', '2023-11-24 08:21:22.532000', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `NestUserLogins`
--

CREATE TABLE `NestUserLogins` (
  `UserId` char(36) NOT NULL,
  `LoginProvider` varchar(64) NOT NULL,
  `TenantId` char(36) DEFAULT NULL,
  `ProviderKey` varchar(196) DEFAULT NULL,
  `ProviderDisplayName` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Nodes`
--

CREATE TABLE `Nodes` (
  `Id` char(36) NOT NULL,
  `TenantId` char(36) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `EndPoint` varchar(255) DEFAULT NULL,
  `MasterDID` varchar(255) DEFAULT NULL,
  `Balance` decimal(18,2) DEFAULT NULL,
  `Status` tinyint(4) DEFAULT NULL,
  `CreationTime` datetime(6) DEFAULT NULL,
  `CreatorId` char(36) DEFAULT NULL,
  `LastModificationTime` datetime(6) DEFAULT NULL,
  `LastModifierId` char(36) DEFAULT NULL,
  `Type` int(11) DEFAULT 0,
  `PeerId` varchar(255) DEFAULT NULL,
  `ServerCertificate` blob DEFAULT NULL,
  `ValidateSSL` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Nodes`
--

INSERT INTO `Nodes` (`Id`, `TenantId`, `Name`, `EndPoint`, `MasterDID`, `Balance`, `Status`, `CreationTime`, `CreatorId`, `LastModificationTime`, `LastModifierId`, `Type`, `PeerId`, `ServerCertificate`, `ValidateSSL`) VALUES
('2a747fad-036b-4644-8d22-4d7b94a7d9c7', NULL, 'Node1', 'http://65.2.135.170:5050/api/createchilddid?app=ISK', 'bafybmigq6zau35bzs664phjfwhmwxp3tc4isrwcdmtw54jl7spys6wqoym', NULL, 1, NULL, NULL, NULL, NULL, 0, '12D3KooWESVwaqqh7prHnp7Xxf7pwnbSeKkJ2CBcrvPzuqux2r2Y', NULL, NULL),
('45fe5c8b-03e8-4a34-93a7-978a3f2b5945', NULL, 'Node2', 'http://65.2.135.170:5050/api/createchilddid?app=V1', 'bafybmigjbppvuobccausj7dv3yxxk5vbeeip7h6em3jbfoalp7gvu5aepq', NULL, 1, NULL, NULL, NULL, NULL, 0, '12D3KooWCZJJs6GJxnxpSKvTEjbL9VpT5C8nZwSqgpppsT9ib8My', NULL, NULL),
('6e5ef0d7-bf35-4d3d-8ff2-dc0da50d28f7', NULL, 'Node3', 'http://65.2.135.170:5050/api/createchilddid?app=V2', 'bafybmieet5fpu5z5j5pjimauoybuozbl4mlhfowxvc2bcnteumuyzcmpbi', NULL, 1, NULL, NULL, NULL, NULL, 0, '12D3KooWR4oiTzt2J8gPLgsQ6qt7zvZsnTLAgrVHdVPbB8rk9cRc', NULL, NULL),
('8d68c2bb-2ce1-485e-8bc2-e7f2e30a6d08', NULL, 'Node6', 'http://65.2.135.170:5050/api/createchilddid?app=V5', 'bafybmidsjtcgjxaoobv3lf5twv4nair2cqs4gsgt3ryqbt5y6ba334rxxa', NULL, 1, NULL, NULL, NULL, NULL, 0, '12D3KooWCwTvNUg6BM9ZSabHBLBJfG9AHYTw5XqWaZmkHoLPAbyM', NULL, NULL),
('aa438050-d823-4c93-8ec3-d1a6a6c66b97', NULL, 'Node4', 'http://65.2.135.170:5050/api/createchilddid?app=V3', 'bafybmigfljzttpu2fpqtayvbopk2jheawhlv2gvdgeep6sbk65xaojwsia', NULL, 1, NULL, NULL, NULL, NULL, 0, '12D3KooWEmJtUZ4HRSUc6VE5GjcbmVP7SyyxaUPiM1KXgWJZGrso', NULL, NULL),
('ca9b3e92-4749-3f6b-cdc5-3a0d1e981f11', NULL, 'Node0', 'http://65.2.135.170:5050/api/createchilddid?app=AM', 'bafybmiglqrs4ovhzs3lxvxntg3vtlkbomb4y4twz7cv7v7vtt3h3zq3hd4', NULL, 1, '2041-11-09 00:00:00.000000', NULL, NULL, NULL, 0, '', NULL, NULL),
('d9eb7c8a-9bb4-4814-97c1-2b371542b8a1', NULL, 'Node5', 'http://65.2.135.170:5050/api/createchilddid?app=V4', 'bafybmigpdasizhaph5xq6kivkt4h6c464wfzqewqcc6kuuktromk2mic4e', NULL, 1, NULL, NULL, NULL, NULL, 0, '12D3KooWKsEr22SYT4nMsVNobickNwwGLHHZRTTSjAbRjmHvSJsn', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `NonFunctionalDays`
--

CREATE TABLE `NonFunctionalDays` (
  `Id` char(36) NOT NULL,
  `TenantId` char(36) DEFAULT NULL,
  `OccassionName` varchar(255) DEFAULT NULL,
  `OccassionDate` datetime(6) DEFAULT NULL,
  `ConcurrencyStamp` varchar(40) DEFAULT NULL,
  `CreationTime` datetime(6) DEFAULT NULL,
  `CreatorId` char(36) DEFAULT NULL,
  `LastModificationTime` datetime(6) DEFAULT NULL,
  `LastModifierId` char(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `NonFunctionalDays`
--

INSERT INTO `NonFunctionalDays` (`Id`, `TenantId`, `OccassionName`, `OccassionDate`, `ConcurrencyStamp`, `CreationTime`, `CreatorId`, `LastModificationTime`, `LastModifierId`) VALUES
('01e07076-6bda-46fc-b35f-680e75540512', NULL, 'string', '2023-11-22 00:00:00.000000', NULL, '2023-11-22 12:00:33.143000', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Sevas`
--

CREATE TABLE `Sevas` (
  `Id` char(36) NOT NULL,
  `TenantId` char(36) DEFAULT NULL,
  `Name` longtext NOT NULL,
  `Description` longtext DEFAULT NULL,
  `SevaImage` longblob DEFAULT NULL,
  `SevaImageBanner` longblob DEFAULT NULL,
  `Type` int(11) NOT NULL,
  `MinAmount` double DEFAULT NULL,
  `AmountType` int(11) NOT NULL,
  `StartDate` datetime(6) DEFAULT NULL,
  `EndDate` datetime(6) DEFAULT NULL,
  `AllowedCurrency` int(11) NOT NULL,
  `MaxUsers` bigint(20) NOT NULL,
  `CreationTime` datetime(6) NOT NULL,
  `CreatorId` char(36) DEFAULT NULL,
  `LastModificationTime` datetime(6) DEFAULT NULL,
  `LastModifierId` char(36) DEFAULT NULL,
  `ActionType` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Sevas`
--

INSERT INTO `Sevas` (`Id`, `TenantId`, `Name`, `Description`, `SevaImage`, `SevaImageBanner`, `Type`, `MinAmount`, `AmountType`, `StartDate`, `EndDate`, `AllowedCurrency`, `MaxUsers`, `CreationTime`, `CreatorId`, `LastModificationTime`, `LastModifierId`, `ActionType`) VALUES
('1', 'tenant1', 'Seva 1', 'Description for Seva 1', NULL, NULL, 1, 10, 1, '2023-01-01 00:00:00.000000', '2023-02-01 00:00:00.000000', 1, 50, '2023-01-01 12:00:00.000000', 'user1', '2023-01-01 12:30:00.000000', 'user2', 0),
('10', 'tenant2', 'Seva 10', 'Description for Seva 10', NULL, NULL, 2, 30, 2, '2023-10-01 00:00:00.000000', '2023-11-01 00:00:00.000000', 2, 125, '2023-10-01 12:00:00.000000', 'user3', '2023-10-01 12:30:00.000000', 'user1', 0),
('2', 'tenant2', 'Seva 2', 'Description for Seva 2', NULL, NULL, 2, 20, 2, '2023-02-01 00:00:00.000000', '2023-03-01 00:00:00.000000', 2, 75, '2023-02-01 12:00:00.000000', 'user2', '2023-02-01 12:30:00.000000', 'user3', 0),
('3', 'tenant1', 'Seva 3', 'Description for Seva 3', NULL, NULL, 1, 15, 1, '2023-03-01 00:00:00.000000', '2023-04-01 00:00:00.000000', 1, 100, '2023-03-01 12:00:00.000000', 'user1', '2023-03-01 12:30:00.000000', 'user2', 0);

-- --------------------------------------------------------

--
-- Table structure for table `SpotLightEvents`
--

CREATE TABLE `SpotLightEvents` (
  `Id` char(36) NOT NULL,
  `TenantId` char(36) DEFAULT NULL,
  `Name` longtext NOT NULL,
  `Description` longtext DEFAULT NULL,
  `EventImage` longblob DEFAULT NULL,
  `BannerImage` longblob DEFAULT NULL,
  `MinAmount` double NOT NULL,
  `CreationTime` datetime(6) NOT NULL,
  `CreatorId` char(36) DEFAULT NULL,
  `LastModificationTime` datetime(6) DEFAULT NULL,
  `LastModifierId` char(36) DEFAULT NULL,
  `AllowedCurrency` int(11) NOT NULL DEFAULT 0,
  `AmountType` int(11) NOT NULL DEFAULT 0,
  `EndDate` datetime(6) DEFAULT NULL,
  `EventDate` datetime(6) DEFAULT NULL,
  `StartDate` datetime(6) DEFAULT NULL,
  `ActionType` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `TickerTexts`
--

CREATE TABLE `TickerTexts` (
  `Id` char(36) NOT NULL,
  `TenantId` char(36) DEFAULT NULL,
  `Quotation` varchar(255) DEFAULT NULL,
  `CreationTime` datetime(6) DEFAULT NULL,
  `CreatorId` char(36) DEFAULT NULL,
  `LastModificationTime` datetime(6) DEFAULT NULL,
  `LastModifierId` char(36) DEFAULT NULL,
  `Status` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `UserDetails`
--

CREATE TABLE `UserDetails` (
  `Id` char(36) NOT NULL,
  `TenantId` char(36) DEFAULT NULL,
  `BirthDay` datetime(6) DEFAULT NULL,
  `IsVolunter` tinyint(4) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `State` varchar(255) DEFAULT NULL,
  `Country` varchar(255) DEFAULT NULL,
  `Pincode` varchar(255) DEFAULT NULL,
  `UserId` char(36) DEFAULT NULL,
  `Gender` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `UserDetails`
--

INSERT INTO `UserDetails` (`Id`, `TenantId`, `BirthDay`, `IsVolunter`, `City`, `Address`, `State`, `Country`, `Pincode`, `UserId`, `Gender`) VALUES
('211eb51a-2f5d-4e47-b39a-d4890899dd54', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 'a03268fc-06bb-40fa-892c-fdc16b8e14df', 0),
('2ebeac3b-7d6f-440a-92a3-c1662e5948a2', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, '305f9c6e-5d64-4a80-89c5-6e6fff3ce520', 0),
('33457c50-7ed9-4262-b8a6-b09b624b6c3c', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, '5700865e-c8ab-4be9-9607-f6ef41212979', 0),
('38cf5600-2008-40dd-b9f8-c60a57b4ef5f', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 'a22b5430-eb89-4df1-ab32-fc2b21cecd2e', 0),
('55ae9dc1-fe8b-4419-a11d-108e46bdf69f', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 'ce6a4976-4594-491b-ba57-75df80abed7b', 0),
('56721d9f-8c23-44c1-a23e-498941f0e742', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 'fc479a71-edee-4bf5-9eef-e932c6ff8ba2', 0),
('5b711ac8-5f81-4173-b1dc-599d1cf340e7', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, '8e5dbc38-424e-4750-b580-0e6786059152', 0),
('5e02dbf4-d181-46ea-9849-a75bcef1ee12', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, '79b26944-b775-4b05-af14-cbcb4a6df450', 0),
('6630ad14-2f96-4ce6-ac02-3d073233ccc1', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, '309f74bf-af9b-4804-a55b-5135ff49e7e9', 0),
('770b6e41-4382-42bc-aac8-25b181eb7a99', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, 'ce9ad6b0-62b8-4989-8b7f-fa0288c18c4f', 0),
('873bff8d-94dc-4d76-abc5-ec54dc441b51', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 'aad1f248-2b52-46bb-8aba-1acd7a0dabfc', 0),
('91c11b19-34a4-4e30-be42-23e664ec1081', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, 'a1aa4201-f338-4d3b-a094-395843835c50', 0),
('935556ae-0479-474d-aad9-e8cd47447e23', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 'c6b56696-ae96-4ace-ad89-7a9af01cd2cb', 0),
('a8d2c052-bb21-41a9-b36b-0756b842b957', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, '4ef859c4-cf54-45a0-8ee9-88a656610179', 0),
('a8f77b0a-c656-453e-9664-0c634d65bc30', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, '41c5ca01-2ecd-4c00-a5ae-295cad09c2a5', 0),
('b2f18450-5f9b-4080-b5f8-36abedbbeb57', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, '99bcef1e-1446-462f-916d-274c3d6ff096', 0),
('ba6681e2-5fea-45ee-af7f-e77a60708b3e', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, '130c736e-56f3-4ee1-b8f1-ee4fc5ccdc7d', 0),
('bd2cf898-54b0-4797-a18f-73093dbcaa32', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 'ddd4b8d9-fad8-41a9-b8f0-363674fbed7d', 0),
('bd727851-eb29-484d-ae46-32d957ed0b2b', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, '9a82b178-8b25-48cf-b1f4-d71a9d965080', 0),
('e0b47e14-1f04-4ac4-9442-d516eb4a9a27', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, '88bb5f62-aec9-4581-b7b0-a116cbe9d23f', 0),
('f7961088-a84e-484a-a85b-950493c3c4c5', NULL, '2023-11-21 15:27:37.600000', 0, 'string', 'string', 'string', 'string', 'string', '2c7739d4-922a-4728-b903-a8acebf77497', 0);

-- --------------------------------------------------------

--
-- Table structure for table `UserDIDS`
--

CREATE TABLE `UserDIDS` (
  `Id` char(36) NOT NULL,
  `TenantId` char(36) DEFAULT NULL,
  `DID` varchar(255) DEFAULT NULL,
  `PvtKey` varchar(255) DEFAULT NULL,
  `Shares` varchar(255) DEFAULT NULL,
  `PeerId` varchar(255) DEFAULT NULL,
  `NodeId` char(36) DEFAULT NULL,
  `CreationTime` datetime(6) DEFAULT NULL,
  `CreatorId` char(36) DEFAULT NULL,
  `LastModificationTime` datetime(6) DEFAULT NULL,
  `LastModifierId` char(36) DEFAULT NULL,
  `Type` int(11) DEFAULT 0,
  `UserId` char(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `UserDIDS`
--

INSERT INTO `UserDIDS` (`Id`, `TenantId`, `DID`, `PvtKey`, `Shares`, `PeerId`, `NodeId`, `CreationTime`, `CreatorId`, `LastModificationTime`, `LastModifierId`, `Type`, `UserId`) VALUES
('0df2c35c-b82e-4b48-9bb8-9fdc7dbfa0c3', NULL, 'bafybmiadnve6pxxucshbfe7jrfgyotyvzlicnw7twnzelhzzzzqo37htuu', NULL, NULL, '12D3KooWESVwaqqh7prHnp7Xxf7pwnbSeKkJ2CBcrvPzuqux2r2Y', '2a747fad-036b-4644-8d22-4d7b94a7d9c7', '2023-11-22 12:49:55.948000', 'ce9ad6b0-62b8-4989-8b7f-fa0288c18c4f', NULL, NULL, 0, 'ce9ad6b0-62b8-4989-8b7f-fa0288c18c4f'),
('16304eb9-570d-4117-9993-184cd7eef947', NULL, 'bafybmiasze6j5epmq4og4vr3jgppadho4p5252dn7aft2ny36uavtnfzfi', NULL, NULL, '12D3KooWESVwaqqh7prHnp7Xxf7pwnbSeKkJ2CBcrvPzuqux2r2Y', '2a747fad-036b-4644-8d22-4d7b94a7d9c7', '2023-11-22 13:05:33.559000', '79b26944-b775-4b05-af14-cbcb4a6df450', NULL, NULL, 0, '79b26944-b775-4b05-af14-cbcb4a6df450'),
('5d2dc058-48fd-4177-aa3f-75cfc222d8a9', NULL, 'bafybmidwsqynitvevnizsmyiungz73o6vs2wgjsqie4jlijt4kri4cgok4', NULL, NULL, '12D3KooWESVwaqqh7prHnp7Xxf7pwnbSeKkJ2CBcrvPzuqux2r2Y', '2a747fad-036b-4644-8d22-4d7b94a7d9c7', '2023-11-22 12:27:18.984000', '309f74bf-af9b-4804-a55b-5135ff49e7e9', NULL, NULL, 0, '309f74bf-af9b-4804-a55b-5135ff49e7e9'),
('e9d756d1-5c6e-4d62-b68c-30fde544bfd6', NULL, 'bafybmico75536mw2xdjsz6oxcmykr2otyata5ehtkpqiru3pm2vmesptda', NULL, NULL, '12D3KooWESVwaqqh7prHnp7Xxf7pwnbSeKkJ2CBcrvPzuqux2r2Y', '2a747fad-036b-4644-8d22-4d7b94a7d9c7', '2023-11-24 06:17:10.714000', '305f9c6e-5d64-4a80-89c5-6e6fff3ce520', NULL, NULL, 0, '305f9c6e-5d64-4a80-89c5-6e6fff3ce520');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `Id` char(36) NOT NULL,
  `UserName` varchar(256) DEFAULT NULL,
  `Name` varchar(64) DEFAULT NULL,
  `Surname` varchar(64) DEFAULT NULL,
  `Email` varchar(256) DEFAULT NULL,
  `EmailConfirmed` tinyint(4) DEFAULT NULL,
  `PasswordHash` varchar(256) DEFAULT NULL,
  `IsExternal` tinyint(4) DEFAULT NULL,
  `PhoneNumber` varchar(16) DEFAULT NULL,
  `PhoneNumberConfirmed` tinyint(4) DEFAULT NULL,
  `IsActive` tinyint(4) DEFAULT NULL,
  `TwoFactorEnabled` tinyint(4) DEFAULT NULL,
  `LockoutEnd` datetime(6) DEFAULT NULL,
  `LockoutEnabled` tinyint(4) DEFAULT NULL,
  `AccessFailedCount` int(11) DEFAULT 0,
  `ShouldChangePasswordOnNextLogin` tinyint(4) DEFAULT NULL,
  `LastPasswordChangeTime` datetime(6) DEFAULT NULL,
  `ExtraProperties` varchar(255) DEFAULT NULL,
  `ConcurrencyStamp` varchar(40) DEFAULT NULL,
  `CreationTime` datetime(6) DEFAULT NULL,
  `CreatorId` char(36) DEFAULT NULL,
  `LastModificationTime` datetime(6) DEFAULT NULL,
  `LastModifierId` char(36) DEFAULT NULL,
  `IsDeleted` tinyint(4) DEFAULT NULL,
  `DeleterId` char(36) DEFAULT NULL,
  `DeletionTime` datetime(6) DEFAULT NULL,
  `Role` char(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`Id`, `UserName`, `Name`, `Surname`, `Email`, `EmailConfirmed`, `PasswordHash`, `IsExternal`, `PhoneNumber`, `PhoneNumberConfirmed`, `IsActive`, `TwoFactorEnabled`, `LockoutEnd`, `LockoutEnabled`, `AccessFailedCount`, `ShouldChangePasswordOnNextLogin`, `LastPasswordChangeTime`, `ExtraProperties`, `ConcurrencyStamp`, `CreationTime`, `CreatorId`, `LastModificationTime`, `LastModifierId`, `IsDeleted`, `DeleterId`, `DeletionTime`, `Role`) VALUES
('130c736e-56f3-4ee1-b8f1-ee4fc5ccdc7d', 'string10', NULL, NULL, 'string', NULL, '$2b$10$d8jINaNiV7L8WVfXt//PP.u6AuOVURmyoJvOMDrbpQyGJzwMYmbze', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 10:55:35.503000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('2c7739d4-922a-4728-b903-a8acebf77497', 'string42', NULL, NULL, 'string', NULL, '$2b$10$g7lp1vFbM05j0qb93MHFJO9ybUTtSdzgx4W/xZJJhBBNl1rGVO/8O', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 15:23:42.043000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('305f9c6e-5d64-4a80-89c5-6e6fff3ce520', 'admin', NULL, NULL, 'test@jm.io', NULL, '$2b$10$sNdo5p4xkVBJp3qTkPVHru0dm9b/xGr98IZOKklkzcPxAxMy7Fwmu', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-24 06:17:10.039000', NULL, NULL, NULL, NULL, NULL, NULL, 'admin'),
('309f74bf-af9b-4804-a55b-5135ff49e7e9', 'string2node', NULL, NULL, 'string@string.io', NULL, '$2b$10$ldffUfZui5CdXG05t7ynteFXZef2/LyRyFM7Cqw87xbByruvJ6jgC', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-22 12:27:18.332000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('41c5ca01-2ecd-4c00-a5ae-295cad09c2a5', 'string', NULL, NULL, 'string', NULL, 'string', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 06:35:49.439000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('4ef859c4-cf54-45a0-8ee9-88a656610179', 'string7', NULL, NULL, 'string', NULL, '$2b$10$CYgkWR2ixmeNk6QFAJfnm.KNRLu1pes.UaKhta.yIXcS9pLcTGt1a', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 10:49:09.624000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('5700865e-c8ab-4be9-9607-f6ef41212979', 'Akshay', NULL, NULL, 'Akshay@gmail.com', NULL, '$2b$10$hq3/84Mwv/h18AzX4NL9l.pL9SiJTEuoLPVG8IorLPDaes6wmkXG.', NULL, '+918074015141', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 12:08:59.261000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('79b26944-b775-4b05-af14-cbcb4a6df450', 'string3', NULL, NULL, 'string@string.io', NULL, '$2b$10$NYQYWmrVHhdH09xquYeQLOspVsqBBxkr/m72N.wQPkmE7CemQko/e', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-22 13:05:32.901000', NULL, NULL, NULL, NULL, NULL, NULL, 'user'),
('88bb5f62-aec9-4581-b7b0-a116cbe9d23f', 'saikiran', NULL, NULL, '8074015141', NULL, 'saikiranutthunuri@gmail.com', NULL, 'sai123', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 07:09:59.138000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('8e5dbc38-424e-4750-b580-0e6786059152', 'string9', NULL, NULL, 'string', NULL, '$2b$10$o1qHadVhnhtSrs.v2HIobu3m/QBAklsPdKzt8rWttu6Auv0jyn1kS', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 10:54:58.054000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('99bcef1e-1446-462f-916d-274c3d6ff096', 'saishibu', NULL, NULL, 'saishibu@jupitermeta.io', NULL, '$2b$10$A30/3TxdYGSgGJr3r9L6eeLnQZMDftLigSi0Eb385WKiTAMRZnn/C', NULL, '9994138380', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 12:08:58.213000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('9a82b178-8b25-48cf-b1f4-d71a9d965080', 'string', NULL, NULL, 'string', NULL, 'string', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 06:42:45.048000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('a03268fc-06bb-40fa-892c-fdc16b8e14df', 'string23', NULL, NULL, 'string', NULL, '$2b$10$NxgUp5VaBgvjgz4dYObEGuE/M09K3aJ0OVP11KQtFy8EtxlfCxnZi', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 12:05:27.662000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('a1aa4201-f338-4d3b-a094-395843835c50', 'string1', NULL, NULL, 'string@string.io', NULL, '$2b$10$kqooG2XM3ewUeZrcIYImW.k86qck6mLx9tqIr2qCN60d9AhEheihu', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-22 11:58:50.160000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('a22b5430-eb89-4df1-ab32-fc2b21cecd2e', 'string', NULL, NULL, 'string', NULL, 'string', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 06:42:55.489000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('aad1f248-2b52-46bb-8aba-1acd7a0dabfc', 'string24', NULL, NULL, 'string', NULL, '$2b$10$zepTz6bjI3OcsgN2f0qflOEM5Ukd0p7RsyRWjGh4MyzTM4ziQlCPm', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 12:12:18.238000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('c6b56696-ae96-4ace-ad89-7a9af01cd2cb', 'string5', NULL, NULL, 'string', NULL, '$2b$10$b1A4stG.dV9JKGSgvUdT2Ow7duSuG41S0cP9rLP9o3dlSSh7a0EHy', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 10:42:15.225000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('ce6a4976-4594-491b-ba57-75df80abed7b', 'vivek', NULL, NULL, 'vivek@gmail.com', NULL, '$2b$10$FtG13exY2hKfW1VjYpJDMO1YQtm76ANnxxWBMelesa/dQphWcfB16', NULL, '8074015141', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 12:14:19.115000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('ce9ad6b0-62b8-4989-8b7f-fa0288c18c4f', 'string2', NULL, NULL, 'string@string.io', NULL, '$2b$10$oi2qKfXdDl1abF/resbIJeQ9iyCd5ZFACoHbdz1hlI/XoPLdullB6', NULL, 'string', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-22 12:49:55.303000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('ddd4b8d9-fad8-41a9-b8f0-363674fbed7d', 'saishibu1', NULL, NULL, 'saishibu@jupitermeta.io', NULL, '$2b$10$yt/IJXPI9Fto/IQ0HaTqUuGeZT7D422l2uvAaOZLbeYBwr17sHRCq', NULL, '9994138380', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 12:15:50.588000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('fc479a71-edee-4bf5-9eef-e932c6ff8ba2', 'User2', NULL, NULL, '9380068810', NULL, 'user2@gmail.com', NULL, 'User2@123', NULL, 1, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, '2023-11-21 09:47:52.430000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('Id', 'UserName', 'Name', 'Surname', 'Email', 0, 'PasswordHash', 0, 'PhoneNumber', 0, 0, 0, '0000-00-00 00:00:00.000000', 0, 0, 0, '0000-00-00 00:00:00.000000', 'ExtraProperties', 'ConcurrencyStamp', '0000-00-00 00:00:00.000000', 'CreatorId', '0000-00-00 00:00:00.000000', 'LastModifierId', 0, 'DeleterId', '0000-00-00 00:00:00.000000', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AudioChants`
--
ALTER TABLE `AudioChants`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `CalenderEvents`
--
ALTER TABLE `CalenderEvents`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `Donations`
--
ALTER TABLE `Donations`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `NestSecurityLogs`
--
ALTER TABLE `NestSecurityLogs`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `NestUserLogins`
--
ALTER TABLE `NestUserLogins`
  ADD PRIMARY KEY (`UserId`,`LoginProvider`);

--
-- Indexes for table `Nodes`
--
ALTER TABLE `Nodes`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `NonFunctionalDays`
--
ALTER TABLE `NonFunctionalDays`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `Sevas`
--
ALTER TABLE `Sevas`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `SpotLightEvents`
--
ALTER TABLE `SpotLightEvents`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `TickerTexts`
--
ALTER TABLE `TickerTexts`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `UserDetails`
--
ALTER TABLE `UserDetails`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `UserDIDS`
--
ALTER TABLE `UserDIDS`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
