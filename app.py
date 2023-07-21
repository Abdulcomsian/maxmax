import jinja2
from flask import Flask, render_template, send_from_directory, request


app = Flask(__name__, template_folder='static')


@app.route('/css/<path:filename>')
def static_css(filename):
    print("static_css" + filename)
    return send_from_directory('static/css', filename)


@app.route('/js/<path:filename>')
def static_js(filename):
    print(filename)
    return send_from_directory('static/js', filename)


@app.route('/images/<path:filename>')
def static_iamges(filename):
    print(filename)
    return send_from_directory('static/images', filename)


@app.route('/')
def signin():
    return render_template("signin.html")


@app.route('/signup')
def signup():
    return render_template("signup.html")


@app.route('/createbrand')
def createBrand():
    return render_template("createbrand.html")


@app.route('/createcompany')
def createCompany():
    return render_template("createcompany.html")


@app.route('/connectprofile')
def connectProfile():
    return render_template("connectprofile.html")


@app.route('/connectedprofiles')
def connectedprofiles():
    return render_template("connectedprofiles.html", title="Connected Profiles")


@app.route('/time')
def time():
    return render_template("time.html", title="Time")


@app.route('/tags')
def tags():
    return render_template("tags.html", title="Existing Tags")


@app.route('/media')
def media():
    return render_template("media.html", title="Media")


@app.route('/media/analytics-time')
def analyticsTime():
    id = request.args.get('id')
    return render_template('analytics-time.html', id=id, title="Analytics")


@app.route('/media/analytics-tags')
def analyticsTags():
    id = request.args.get('id')
    return render_template('analytics-tags.html', id=id, title="Tags")


if __name__ == '__main__':
    app.run(debug=True)
