local:
	rm -rf ../jiketao-server/public/cdn/0.0.3
	cp -a bin ../jiketao-server/public/cdn/0.0.3
release:
	gulp build
	git add -A
	git cm -am "deploy to server"
	git tag -d 0.0.3
	git push deploy :0.0.3
	git tag 0.0.3
	git push deploy --tags
