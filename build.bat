set IMAGE_TAG=1.0.0


@REM 查看版本
docker --version 
@REM build image
docker build -t vite-template:%IMAGE_TAG% .
