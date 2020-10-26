REPOSITORY = spa-disaster-monitor-vanilla

help:
	@echo -B --always-make
	@echo first //make this the first and the only commit
	@echo repo //create repository

.PHONY: first
first:
	rm -rfv .git
	git init
	git add --all
	git commit -m "."
	git remote add origin https://github.com/albraga/${REPOSITORY}
	git push -u --force origin master 

.PHONY: repo
repo:
	curl -u 'albraga' https://api.github.com/user/repos -d '{"name":"${REPOSITORY}"}'

.PHONY: pull
pull:
	git fetch --all
	git reset --hard origin/master

.PHONY: push
push:
	git add --all
	git commit -m '.'
	git push

.PHONY: serve
serve:
	php -S localhost:8080