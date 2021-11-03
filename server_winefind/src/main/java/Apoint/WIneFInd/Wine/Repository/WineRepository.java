package Apoint.WIneFInd.Wine.Repository;

import Apoint.WIneFInd.Wine.Model.Wine;
import org.springframework.data.jpa.repository.JpaRepository;


public interface WineRepository extends JpaRepository<Wine, Long>, QuerydslPredicateExecutor<Wine>, WineRepositoryCustom {
    
    Wine findByWineName(String wineName);
}
