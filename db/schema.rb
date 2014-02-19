# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140219115353) do

  create_table "howtos", force: true do |t|
    t.integer  "user_id"
    t.boolean  "howto1"
    t.boolean  "howto2"
    t.boolean  "howto3"
    t.boolean  "howto4"
    t.boolean  "howto5"
    t.boolean  "howto6"
    t.boolean  "howto7"
    t.boolean  "howto8"
    t.boolean  "howto9"
    t.boolean  "howto10"
    t.boolean  "howto11"
    t.boolean  "howto12"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "money", force: true do |t|
    t.integer  "user_id"
    t.integer  "el"
    t.integer  "jr"
    t.integer  "hi"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "posts", force: true do |t|
    t.integer  "user_id"
    t.string   "address"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "postal_code"
    t.string   "postal_code_1"
    t.string   "postal_code_2"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "poststus", force: true do |t|
    t.integer  "user_id"
    t.string   "address"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "postal_code"
    t.string   "postal_code_1"
    t.string   "postal_code_2"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "purposes", force: true do |t|
    t.integer  "user_id"
    t.boolean  "record"
    t.boolean  "pass"
    t.boolean  "conquer"
    t.boolean  "level"
    t.boolean  "basic"
    t.boolean  "applied"
    t.boolean  "mygoal"
    t.boolean  "refusal"
    t.boolean  "capacity"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "reviews", force: true do |t|
    t.integer  "user_id"
    t.float    "a"
    t.float    "b"
    t.float    "c"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "sta", force: true do |t|
    t.integer  "user_id"
    t.string   "first"
    t.string   "second"
    t.string   "third"
    t.string   "four"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "students", force: true do |t|
    t.integer  "user_id"
    t.string   "email"
    t.string   "pw"
    t.string   "name"
    t.string   "name_stu"
    t.string   "image"
    t.string   "sex"
    t.integer  "age"
    t.string   "grade"
    t.integer  "grade_num"
    t.boolean  "carspace"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "subjects", force: true do |t|
    t.integer  "user_id"
    t.string   "math"
    t.string   "english"
    t.string   "society"
    t.string   "science"
    t.string   "japanese"
    t.string   "program"
    t.string   "art"
    t.string   "think"
    t.string   "other"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "subjectstus", force: true do |t|
    t.integer  "user_id"
    t.string   "math"
    t.string   "english"
    t.string   "society"
    t.string   "science"
    t.string   "japanese"
    t.string   "program"
    t.string   "art"
    t.string   "think"
    t.string   "other"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "teachers", force: true do |t|
    t.integer  "user_id"
    t.string   "email"
    t.string   "pw"
    t.string   "name"
    t.string   "image"
    t.string   "sex"
    t.integer  "age"
    t.string   "univ"
    t.string   "faculty"
    t.string   "dept"
    t.string   "acmail"
    t.text     "short_msg"
    t.text     "long_msg"
    t.boolean  "car"
    t.boolean  "car_license"
    t.string   "ac_license"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "who"
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "weeks", force: true do |t|
    t.integer  "user_id"
    t.boolean  "mon"
    t.boolean  "tue"
    t.boolean  "wed"
    t.boolean  "thu"
    t.boolean  "fri"
    t.boolean  "sat"
    t.boolean  "sun"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "weekstus", force: true do |t|
    t.integer  "user_id"
    t.boolean  "mon"
    t.boolean  "tue"
    t.boolean  "wed"
    t.boolean  "thu"
    t.boolean  "fri"
    t.boolean  "sat"
    t.boolean  "sun"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
