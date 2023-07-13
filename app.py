import jinja2
from flask import Flask, render_template, url_for, send_from_directory

jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader("static"))
jinja_env.globals['url_for'] = url_for

app = Flask(__name__, template_folder='static')


@app.route('/static/css/<path:filename>')
def static_file(filename):
    print(filename)
    return send_from_directory('static/css', filename)


@app.route('/')
def signin():
    template = jinja_env.get_template("signin.html")
    return template.render()


@app.route('/signup')
def signup():
    template = jinja_env.get_template("signup.html")
    return template.render()


@app.route('/createbrand')
def createBrand():
    template = jinja_env.get_template("createbrand.html")
    return template.render()


@app.route('/createcompany')
def createCompany():
    template = jinja_env.get_template("createcompany.html")
    return template.render()


@app.route('/connectprofile')
def connectProfile():
    template = jinja_env.get_template("connectprofile.html")
    return template.render()


@app.route('/connectedprofiles')
def connectedprofiles():
    template = jinja_env.get_template("connectedprofiles.html")
    return template.render()


@app.route('/time')
def time():
    template = jinja_env.get_template("time.html")
    return template.render()


if __name__ == '__main__':
    app.run(debug=True)
