module.exports = {
	apps : [{
		name        : "server",
		script      : "server/index.js",
		interpreter : "/usr/local/bin/npm",
		interpreter_args: "run babelwatch",
		watch: false,
		env: {
			watch: false,
			NODE_ENV: "development",
			PORT: 8801,
		},
		env_production : {
			NODE_ENV: "production",
			PORT: 8801,
		}
	}]
}
