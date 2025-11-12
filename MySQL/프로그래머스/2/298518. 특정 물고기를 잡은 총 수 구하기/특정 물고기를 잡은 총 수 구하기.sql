select count(*) as FISH_COUNT
from fish_info fi, fish_name_info fni
# 조인
where fi.fish_type = fni.fish_type
and fni.fish_name IN ("BASS" , "SNAPPER");