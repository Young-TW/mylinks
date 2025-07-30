
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ELECTRON_RUN_AS_NODE: string;
	export const CHROME_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const DEBUGINFOD_IMA_CERT_PATH: string;
	export const DEBUGINFOD_URLS: string;
	export const DESKTOP_SESSION: string;
	export const DISPLAY: string;
	export const EDITOR: string;
	export const GDK_BACKEND: string;
	export const GDMSESSION: string;
	export const GDM_LANG: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const GJS_DEBUG_TOPICS: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const HOME: string;
	export const HSA_OVERRIDE_GFX_VERSION: string;
	export const INVOCATION_ID: string;
	export const JOURNAL_STREAM: string;
	export const LANG: string;
	export const LD_LIBRARY_PATH: string;
	export const LOGNAME: string;
	export const MANAGERPID: string;
	export const MANPATH: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const MODULEPATH: string;
	export const MODULESHOME: string;
	export const MODULES_CMD: string;
	export const MODULES_RUN_QUARANTINE: string;
	export const MOZ_GMP_PATH: string;
	export const NIX_PROFILES: string;
	export const NIX_SSL_CERT_FILE: string;
	export const NO_AT_BRIDGE: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const PATH: string;
	export const PKG_CONFIG_PATH: string;
	export const PNPM_HOME: string;
	export const PWD: string;
	export const QT_IM_MODULE: string;
	export const SESSION_MANAGER: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const SSH_AUTH_SOCK: string;
	export const SYSTEMD_EXEC_PID: string;
	export const SYSTEMD_SLEEP_FREEZE_USER_SESSIONS: string;
	export const USER: string;
	export const USERNAME: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const VSCODE_CWD: string;
	export const VSCODE_ESM_ENTRYPOINT: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const VSCODE_IPC_HOOK: string;
	export const VSCODE_NLS_CONFIG: string;
	export const VSCODE_PID: string;
	export const WAYLAND_DISPLAY: string;
	export const XAUTHORITY: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_MENU_PREFIX: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const XMODIFIERS: string;
	export const __ETC_PROFILE_NIX_SOURCED: string;
	export const __MODULES_LMINIT: string;
	export const __MODULES_SHARE_MANPATH: string;
	export const fish_user_paths: string;
	export const APPLICATION_INSIGHTS_NO_STATSBEAT: string;
	export const ELECTRON_NO_ASAR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ELECTRON_RUN_AS_NODE: string;
		CHROME_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		DEBUGINFOD_IMA_CERT_PATH: string;
		DEBUGINFOD_URLS: string;
		DESKTOP_SESSION: string;
		DISPLAY: string;
		EDITOR: string;
		GDK_BACKEND: string;
		GDMSESSION: string;
		GDM_LANG: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		GJS_DEBUG_OUTPUT: string;
		GJS_DEBUG_TOPICS: string;
		GNOME_SETUP_DISPLAY: string;
		HOME: string;
		HSA_OVERRIDE_GFX_VERSION: string;
		INVOCATION_ID: string;
		JOURNAL_STREAM: string;
		LANG: string;
		LD_LIBRARY_PATH: string;
		LOGNAME: string;
		MANAGERPID: string;
		MANPATH: string;
		MEMORY_PRESSURE_WATCH: string;
		MEMORY_PRESSURE_WRITE: string;
		MODULEPATH: string;
		MODULESHOME: string;
		MODULES_CMD: string;
		MODULES_RUN_QUARANTINE: string;
		MOZ_GMP_PATH: string;
		NIX_PROFILES: string;
		NIX_SSL_CERT_FILE: string;
		NO_AT_BRIDGE: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		PATH: string;
		PKG_CONFIG_PATH: string;
		PNPM_HOME: string;
		PWD: string;
		QT_IM_MODULE: string;
		SESSION_MANAGER: string;
		SHELL: string;
		SHLVL: string;
		SSH_AUTH_SOCK: string;
		SYSTEMD_EXEC_PID: string;
		SYSTEMD_SLEEP_FREEZE_USER_SESSIONS: string;
		USER: string;
		USERNAME: string;
		VSCODE_CODE_CACHE_PATH: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		VSCODE_CWD: string;
		VSCODE_ESM_ENTRYPOINT: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		VSCODE_IPC_HOOK: string;
		VSCODE_NLS_CONFIG: string;
		VSCODE_PID: string;
		WAYLAND_DISPLAY: string;
		XAUTHORITY: string;
		XDG_CURRENT_DESKTOP: string;
		XDG_DATA_DIRS: string;
		XDG_MENU_PREFIX: string;
		XDG_RUNTIME_DIR: string;
		XDG_SESSION_CLASS: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		XMODIFIERS: string;
		__ETC_PROFILE_NIX_SOURCED: string;
		__MODULES_LMINIT: string;
		__MODULES_SHARE_MANPATH: string;
		fish_user_paths: string;
		APPLICATION_INSIGHTS_NO_STATSBEAT: string;
		ELECTRON_NO_ASAR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
