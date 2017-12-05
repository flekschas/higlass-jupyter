.PHONY: build install clean all

install:
	python setup.py jsdeps
	jupyter nbextension install --py --symlink --sys-prefix jupyter_higlass
	jupyter nbextension enable --py --sys-prefix jupyter_higlass

uninstall:
	jupyter nbextension uninstall --py --sys-prefix jupyter_higlass
	rm -rf jupyter_higlass/static/
	rm -rf build

build:
	python setup.py jsdeps

clean:
	rm -rf jupyter_higlass/static/
	rm -rf build
