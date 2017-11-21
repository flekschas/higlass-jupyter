.PHONY: build clean all

build:
	python setup.py build
	jupyter nbextension install --py --symlink --sys-prefix jupyter_higlass
	jupyter nbextension enable --py --sys-prefix jupyter_higlass

clean:
	jupyter nbextension uninstall --py --sys-prefix jupyter_higlass
	rm -rf jupyter_higlass/static/
	rm -rf build
