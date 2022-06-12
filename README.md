## 参考記事

-   https://noumenon-th.net/programming/2020/02/12/laravel-api/
-   https://qiita.com/tamakiiii/items/e71040173fa0a1fcad83

## エラー集

-   Windows で psql 接続しようとすると以下のエラーで接続できない。

```
psql: error: could not connect to server: Connection refused
        Is the server running on host "localhost" (127.0.0.1) and accepting
        TCP/IP connections on port 5432?
```

以下のコマンドで編集

```
root:~# vi /etc/postgresql/12/main/postgresql.conf

```

port = 5433 # (change requires restart) ← ここを変更
max_connections = 100 # (change requires restart)

```
$ php artisan migrate

   Illuminate\Database\QueryException

  could not find driver (SQL: select * from information_schema.tables where table_schema = public and table_name = migrations and table_type = 'BASE TABLE')

  at vendor/laravel/framework/src/Illuminate/Database/Connection.php:712
    708▕         // If an exception occurs when attempting to run a query, we'll format the error
    709▕         // message to include the bindings with SQL, which will make this exception a
    710▕         // lot more helpful to the developer instead of just the database's errors.
    711▕         catch (Exception $e) {
  ➜ 712▕             throw new QueryException(
    713▕                 $query, $this->prepareBindings($bindings), $e
    714▕             );
    715▕         }
    716▕     }

      +33 vendor frames
  34  artisan:37
      Illuminate\Foundation\Console\Kernel::handle()
```

以下のコマンドで解決

```
root@DESKTOP-82QB9O5-wsl-wsl:~# apt-get install php-pgsql
```

実行後

```
$ systemctl status postgresql
Failed to connect to bus: Connection refused
```

になったので

```
$ genie -s
genie: WARNING: systemd default target is default.target; targets other than multi-user.target may not work
genie: WARNING: if you wish to use a different target, this warning can be disabled in the config file
genie: WARNING: if you experience problems, please change the target to multi-user.target
umount: /proc/sys/fs/binfmt_misc: not mounted.
genie: failed to unmount binfmt_misc filesystem; attempting to continue
Waiting for systemd....!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
```

できたーーーー！！！

```
sotto@DESKTOP-82QB9O5-wsl-wsl-wsl:~/work/laravel_api$ php artisan migrate
Migration table created successfully.
Migrating: 2014_10_12_000000_create_users_table
Migrated:  2014_10_12_000000_create_users_table (12.49ms)
Migrating: 2014_10_12_100000_create_password_resets_table
Migrated:  2014_10_12_100000_create_password_resets_table (8.30ms)
Migrating: 2016_06_01_000001_create_oauth_auth_codes_table
Migrated:  2016_06_01_000001_create_oauth_auth_codes_table (10.90ms)
Migrating: 2016_06_01_000002_create_oauth_access_tokens_table
Migrated:  2016_06_01_000002_create_oauth_access_tokens_table (11.30ms)
Migrating: 2016_06_01_000003_create_oauth_refresh_tokens_table
Migrated:  2016_06_01_000003_create_oauth_refresh_tokens_table (8.13ms)
Migrating: 2016_06_01_000004_create_oauth_clients_table
Migrated:  2016_06_01_000004_create_oauth_clients_table (12.80ms)
Migrating: 2016_06_01_000005_create_oauth_personal_access_clients_table
Migrated:  2016_06_01_000005_create_oauth_personal_access_clients_table (4.98ms)
Migrating: 2019_08_19_000000_create_failed_jobs_table
Migrated:  2019_08_19_000000_create_failed_jobs_table (14.80ms)
Migrating: 2019_12_14_000001_create_personal_access_tokens_table
Migrated:  2019_12_14_000001_create_personal_access_tokens_table (14.30ms)
Migrating: 2022_06_07_124902_create_books_table
Migrated:  2022_06_07_124902_create_books_table (9.18ms)
sotto@DESKTOP-82QB9O5-wsl-wsl-wsl:~/work/laravel_api$

```
