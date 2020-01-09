# green-living


## Starting the development server

In the terminal, run:

    cd ~/Documents/Eco\ map
    make start

Then go to http://localhost:8000/ in browser


## Using Git

```
cd ~/Documents/Eco\ map/
git status
git add -p
git status
git commit -m "YOUR MESSAGE"
git push
```

## Static files (images, CSS, JS)

These are located in `project/static`. To use these files from a webpage, write `/static/` then the rest of the path inside.

E.g. for the image file `/home/felicity/Documents/Eco map/project/static/img/fulllogo.svg` you would create the tag:

```
    <img src="/static/img/fulllogo.svg" />
```