#!/bin/sh -e

#echo "Logging to iCheck Container Registry with CI credentials..."
#docker login -u thangnm -p 7weaEDTeB3SG hub.icheck.com.vn
#registry.icheck.com.vn/dms/icheck-dms-portal
echo "Building application..."
#echo CI_COMMIT_BEFORE_SHA is $CI_COMMIT_BEFORE_SHA
tag=$CI_APPLICATION_TAG
CI_APPLICATION_REPOSITORY=registry.icheck.com.vn/dms/icheck-dms-portal
echo tag is $tag
echo `echo $tag | grep "^uat#"`
if echo $tag | grep "^uat#"; then
	CI_APPLICATION_TAG=${tag//uat#/}
	echo uat version is $version
elif echo $tag | grep "^production#"; then
	CI_APPLICATION_TAG=${tag//production#/}
	echo production version is $version
else
	echo undefine
fi

echo CI_APPLICATION_TAG is $CI_APPLICATION_TAG


#docker build -t registry.icheck.com.vn/dms/icheck-dms-portal:$CI_APPLICATION_TAG -f docker/Dockerfile .
#docker tag registry.icheck.com.vn/dms/icheck-dms-portal:$CI_APPLICATION_TAG $CI_APPLICATION_REPOSITORY:$CI_APPLICATION_TAG
#docker push registry.icheck.com.vn/dms/icheck-dms-portal:$CI_APPLICATION_TAG

docker build -t registry.icheck.com.vn/dms/icheck-dms-portal:0.0.1 -f docker/Dockerfile .
docker tag registry.icheck.com.vn/dms/icheck-dms-portal:0.0.1 $CI_APPLICATION_REPOSITORY:0.0.1
docker push registry.icheck.com.vn/dms/icheck-dms-portal:0.0.1

#docker build \
#  --tag "$CI_APPLICATION_REPOSITORY:$CI_APPLICATION_TAG" \
#  --tag "$CI_APPLICATION_REPOSITORY:latest" \
#  -f docker/Dockerfile .

#docker push $CI_APPLICATION_REPOSITORY:$CI_APPLICATION_TAG
#docker push $CI_APPLICATION_REPOSITORY:latest
