# Spring-React-Shop

Этот репозиторий содержит пример проекта онлайн-магазина со
следующим стеком технологий: ReactJs, Redux, Scss, SpringRest, Hibernate, SpringMVC, Postgresql.

P.S. Этот проект является копией другого моего проекта -
https://github.com/acdemeg/ReactNodeShop с переписанным на java(spring) бэкендом. Ознакомиться с демо проекта и более подробной информацией можно по ссылке выше.

### Требования к запуску:
1. `Tomcat ver. 9.0+`
2. `Java ver. 8.0+`
3. `Postgres ver. 11+`

### Как запускать: 
1. `Собрать проект с помощью mvn package`
2. `Node и все зависимости должны подтянуться автоматически с помощью frontend-maven-plugin`
3. `Запусить db-create-sript.sql чтобы создать схему БД`
4. `Создать конфигурацию запуска tomcat в вашей IDE или скопировать .war(файл нужно будет переименовать в ROOT.war) файл в дирекорию $TOMCAT_HOME/webapps`
