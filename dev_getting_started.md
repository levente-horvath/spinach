## QUICK GETTING STARTED GUIDE WITH THE GIT PROJECT (DEBIAN 12)
install dependencies
```
sudo apt update
sudo apt install php sqlite3 php8.2-sqlite3 git php-xml npm
```
install composer
```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer
composer global require laravel/installer
echo "export PATH="~/.config/composer/vendor/bin:$PATH"" >> ~/.bashrc
source ~/.bashrc
```
clone the repo
```
git clone git@github.com:levente-horvath/spinach.git
cd spinach
```
install composer and npm dependencies
```
composer install
npm install
```
install php debugbar
```
composer require barryvdh/laravel-debugbar --dev
```
add new .env file
example env:
```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:sdgwtrerwfwfew
APP_DEBUG=true
APP_TIMEZONE=UTC
APP_URL=http://localhost

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file
APP_MAINTENANCE_STORE=database

BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database
CACHE_PREFIX=

MEMCACHED_HOST=127.0.0.1

VITE_APP_NAME="${APP_NAME}"
```

generate new app key
```
php artisan key:generate
```

make the first migration (to generate sqlite db)
```
php artisan migrate
```

serve the app
```
php artisan serve
```
