
# Start mysql to be able to use mysql commands


```sh
brew services start mysql
```


You'll need to start MySQL before you can use the mysql command on your terminal. To do this, run brew services start mysql. By default, brew installs the MySQL database without a root password. To secure it run: mysql_secure_installation.

To connect run: mysql -uroot. root is the username name here

# Sifre sifirlama

```sh
mysql -u root
```


```sh
ALTER USER 'root'@'localhost' IDENTIFIED BY 'newPasswd';
```


