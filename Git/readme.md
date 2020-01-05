Git Hooks.

Projeye git hook eklemek için projenin hooklarının olduğu dizini yenidenset etmek gerekiyor. Proje dizinine bir klasör açtım adı git-hooks. Sonra aşağıdaki konutu çalıştırdım.

git config core.hooksPath git-hooks

Komutu çalıştırınca .git in altındaki örneklere bakmıyor artık gitimiz hooklar için. hook isimleri özel, değiştirmemek lazım. 

post-commit diye bir dosya ekledim. uzantısı yok. chmod +x post-commit dedikten sonra dosyamız artık çalıştırılabilir özelliğe sahip oldu. 

slack üzerinden bir webhook oluşturmuştum. curl ile o hooku çağırınca slack kanalına mesaj atıyor. 

yaptığım şey son commiti alıp web hooku çağırmak. Artık her committe slacke bildirip düşecek.

post-commit dosyamın içi 

tmpmsg=$(git log -n 1 HEAD)
curl -X POST --data-urlencode "payload={\"channel\": \"#docs\", \"username\": \"webhookbot\", \"text\": \"This is posted to #docs and comes from a bot named webhookbot. See what has been committed --> "$tmpmsg"  \", \"icon_emoji\": \":ghost:\"}" https://hooks.slack.com/services/????????????????????????