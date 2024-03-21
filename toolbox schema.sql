-- -----------------------------------------------------
-- Schema Toolbox
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Toolbox`;
USE `Toolbox` ;

-- -----------------------------------------------------
-- Table `Toolbox`.`variation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Toolbox`.`variation` (
  `variation_id` INT NOT NULL,
  `variant` VARCHAR(45) NULL,
  `stock` INT NULL,
  PRIMARY KEY (`variation_id`));

-- -----------------------------------------------------
-- Table `Toolbox`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Toolbox`.`product` (
  `product_id` INT NOT NULL,
  `price` FLOAT NULL,
  `name` VARCHAR(45) NULL,
  `category` VARCHAR(45) NULL,
  `variation_id` INT NULL,
  `seller_id` INT NULL,
  PRIMARY KEY (`product_id`),
  INDEX `variation_id_idx` (`variation_id` ASC) VISIBLE,
  CONSTRAINT `variation_id`
    FOREIGN KEY (`variation_id`)
    REFERENCES `Toolbox`.`variation` (`variation_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `Toolbox`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Toolbox`.`image` (
  `image_id` INT NOT NULL,
  `image_url` VARCHAR(256) NULL,
  `product_id` INT NULL,
  PRIMARY KEY (`image_id`),
  INDEX `product_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `Toolbox`.`product` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `Toolbox`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Toolbox`.`user` (
  `user_id` INT NOT NULL,
  `user_name` VARCHAR(45) NULL,
  PRIMARY KEY (`user_id`));

-- -----------------------------------------------------
-- Table `Toolbox`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Toolbox`.`orders` (
  `order_id` INT NOT NULL,
  `transaction_date` DATE NULL,
  `product_id` INT NULL,
  `quantity` INT NULL,
  `buyer_id` INT NULL,
  `seller_id` INT NULL,
  PRIMARY KEY (`order_id`),
  INDEX `buyer_id_idx` (`buyer_id` ASC) VISIBLE,
  INDEX `seller_id_idx` (`seller_id` ASC) VISIBLE,
  CONSTRAINT `product_id_fk`
    FOREIGN KEY (`product_id`)
    REFERENCES `Toolbox`.`product` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `buyer_id`
    FOREIGN KEY (`buyer_id`)
    REFERENCES `Toolbox`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `seller_id`
    FOREIGN KEY (`seller_id`)
    REFERENCES `Toolbox`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


