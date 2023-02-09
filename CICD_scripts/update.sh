update() {
    git fetch
    git reset --hard origin/main
    mix deps.get
    mix compile
    mix ecto.migrate
    mix phx.server
}
